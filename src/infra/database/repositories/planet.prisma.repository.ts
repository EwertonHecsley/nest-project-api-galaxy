import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import { PrismaService } from "../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { Planet } from "src/domain/planet/entity/planet.entity";
import { PlanetPrismaMapper } from "../prisma/mappers/planet.prisma.mapper";

@Injectable()
export class PlanetPrismaRepository implements PlanetRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(planet: Planet): Promise<Planet> {
        const data = PlanetPrismaMapper.toDatabase(planet);

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
}