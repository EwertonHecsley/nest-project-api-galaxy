import { SpaceShip } from "src/domain/spaceShips/entity/spaceShips.entity";
import { SpaceShipRepository } from "src/domain/spaceShips/repository/spaceShip.repository";
import { PrismaService } from "../prisma/prisma.service";
import { SpaceShipPrismaMapper } from "../prisma/mappers/spaceShip.prisma.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SpaceShipPrismaRepository implements SpaceShipRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async list(): Promise<SpaceShip[]> {
        const result = await this.prismaService.spaceShip.findMany();

        return result.map(spaceShip => SpaceShipPrismaMapper.toDomain(spaceShip));
    }
}