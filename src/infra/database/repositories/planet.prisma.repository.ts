import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import { PrismaService } from "../prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Planet } from "src/domain/planet/entity/planet.entity";
import { PlanetPrismaMapper } from "../prisma/mappers/planet.prisma.mapper";

@Injectable()
export class PlanetPrismaRepository implements PlanetRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(planet: Planet): Promise<Planet> {

        const data = PlanetPrismaMapper.toDatabase(planet);

        const starSystemExist = await this.prismaService.starSystem.findFirst({ where: { id: data.starSystemId } });

        if (!starSystemExist) {
            return null;
        }

        const createdPlanet = await this.prismaService.planet.create({ data });

        return PlanetPrismaMapper.toDomain(createdPlanet);
    }

    async findMany(id: string): Promise<Planet> {

        const foundPlanet = await this.prismaService.planet.findFirst({ where: { id } });

        if (!foundPlanet) {
            return null;
        }

        return PlanetPrismaMapper.toDomain(foundPlanet);
    }

    async findByName(name: string): Promise<Planet> {
        const planet = await this.prismaService.planet.findUnique({ where: { name } });

        if (!planet) {
            return null;
        }

        return PlanetPrismaMapper.toDomain(planet);
    }

    async list(): Promise<Planet[]> {
        const listPlanets = await this.prismaService.planet.findMany();

        return listPlanets.map(PlanetPrismaMapper.toDomain);
    }

    async save(planet: Planet): Promise<void> {

        const planetExist = await this.prismaService.planet.findFirst({ where: { id: planet.id.valueId } });

        if (!planetExist) {
            return null;
        }

        const starSystemExist = await this.prismaService.starSystem.findFirst({ where: { id: planet.starSystemId } });

        if (!starSystemExist) {
            throw new NotFoundException('StarSystem not found');
        }

        await this.prismaService.planet.update({ where: { id: planet.id.valueId }, data: PlanetPrismaMapper.toDatabase(planet) });
    }

    async delete(id: string): Promise<void> {
        const planet = await this.prismaService.planet.findFirst({ where: { id } });

        if (!planet) {
            return null;
        }

        await this.prismaService.planet.delete({ where: { id: planet.id } });
    }
}