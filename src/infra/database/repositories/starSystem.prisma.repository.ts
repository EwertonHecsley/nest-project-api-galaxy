import { StarSystemRepository } from "src/domain/starSystem/repository/starSystem.repository";
import { PrismaService } from "../prisma/prisma.service";
import StarSystem from "src/domain/starSystem/entity/starSystem.entity";
import { StarSystemPrismaMapper } from "../prisma/mappers/starSystem.prisma.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class StarSystemPrismaRepository implements StarSystemRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(starSystem: StarSystem): Promise<StarSystem> {
        const data = StarSystemPrismaMapper.toDatabase(starSystem);

        const result = await this.prismaService.starSystem.create({ data });

        return StarSystemPrismaMapper.toDomain(result);
    }

    async findMany(id: string): Promise<StarSystem> {
        const starSystemExist = await this.prismaService.starSystem.findFirst({ where: { id }, include: { planets: true } });

        if (!starSystemExist) {
            return null;
        }

        return StarSystemPrismaMapper.toDomain(starSystemExist);
    }

    async list(): Promise<StarSystem[]> {
        const starSystemsWithPlanets = await this.prismaService.starSystem.findMany({ include: { planets: true } });

        const result = starSystemsWithPlanets.map(starSystem => {

            const planets = starSystem.planets.map(prismaPlanet => {
                return {
                    id: prismaPlanet.id,
                    name: prismaPlanet.name,
                    climate: prismaPlanet.climate,
                    terrain: prismaPlanet.terrain,
                    population: prismaPlanet.population,
                    starSystemId: prismaPlanet.starSystemId
                }
            });

            return {
                id: starSystem.id,
                name: starSystem.name,
                description: starSystem.description,
                planets: planets
            }
        });

        return result.map(StarSystemPrismaMapper.toDomain);
    }
}