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
}