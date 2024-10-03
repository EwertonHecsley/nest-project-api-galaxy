import { Character } from "src/domain/character/entity/character.entity";
import { CharacterRepository } from "src/domain/character/repository/character.repository";
import { PrismaService } from "../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { CharacterPrismaMapper } from "../prisma/mappers/character.prisma.mapper";

@Injectable()
export class CharacterPrismaRepository implements CharacterRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(character: Character): Promise<Character> {
        const data = CharacterPrismaMapper.toDatabase(character);

        const planetExist = await this.prismaService.planet.findUnique({ where: { id: data.planetId }, include: { Character: true } });

        if (!planetExist) {
            return null;
        }

        const newCharacter = await this.prismaService.character.create({ data });

        return CharacterPrismaMapper.toDomain(newCharacter, planetExist.name);
    }

    async list(): Promise<Character[]> {
        const listCharactersWithPlanets = await this.prismaService.character.findMany({ include: { homePlanet: true } });

        const result = listCharactersWithPlanets.map(character => {

            return CharacterPrismaMapper.toDomain(character, character.homePlanet ? character.homePlanet.name : null);
        });

        return result;
    }

    async find(id: string): Promise<Character> {
        const character = await this.prismaService.character.findFirst({ where: { id }, include: { homePlanet: true } });

        if (!character) {
            return null;
        }

        return CharacterPrismaMapper.toDomain(character, character.homePlanet ? character.homePlanet.name : null);
    }

    async save(character: Character): Promise<void> {

        const data = CharacterPrismaMapper.toDatabase(character);

        await this.prismaService.character.update({ where: { id: data.id }, data });
    }
}