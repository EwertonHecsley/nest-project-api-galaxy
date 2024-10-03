import { Either, left, right } from "src/domain/errors/either/either";
import { CharacterRepository } from "../repository/character.repository";
import { NotFoundException } from "@nestjs/common";
import { PlanetRepository } from "../../planet/repository/planet.repository";

type Request = {
    id: string;
    name?: string;
    race?: string;
    affiliation?: string;
    homePlanetId?: string;
}

type Response = Either<null | NotFoundException, boolean>

export class EditCharacterUseCase {

    constructor(
        private readonly characterRepository: CharacterRepository,
        private readonly planetRepository: PlanetRepository
    ) { }

    async execute(data: Request): Promise<Response> {

        const character = await this.characterRepository.find(data.id);

        if (!character) {
            return left(new NotFoundException('Character not found'));
        }

        if (data.homePlanetId) {
            const planet = await this.planetRepository.findByName(data.homePlanetId);

            if (!planet) {
                return left(new NotFoundException('Planet not found'));
            }

            character.homePlanet = planet.name;
        }

        if (data.name) character.name = data.name;
        if (data.race) character.race = data.race;
        if (data.affiliation) character.affiliation = data.affiliation;

        await this.characterRepository.save(character);

        return right(true);
    }
}
