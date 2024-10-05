import { SpaceShip } from "src/domain/spaceShips/entity/spaceShips.entity";
import { SpaceShipRepository } from "src/domain/spaceShips/repository/spaceShip.repository";
import { PrismaService } from "../prisma/prisma.service";
import { SpaceShipPrismaMapper } from "../prisma/mappers/spaceShip.prisma.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SpaceShipPrismaRepository implements SpaceShipRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(spaceShip: SpaceShip): Promise<SpaceShip> {
        const data = SpaceShipPrismaMapper.toDatabase(spaceShip);

        const result = await this.prismaService.spaceShip.create({ data });

        return SpaceShipPrismaMapper.toDomain(result);
    }

    async list(): Promise<SpaceShip[]> {
        const result = await this.prismaService.spaceShip.findMany();

        return result.map(spaceShip => SpaceShipPrismaMapper.toDomain(spaceShip));
    }

    async find(id: string): Promise<SpaceShip> {
        const result = await this.prismaService.spaceShip.findFirst({ where: { id } });

        if (!result) {
            return null;
        }

        return SpaceShipPrismaMapper.toDomain(result);
    }

    async save(spaceSchip: SpaceShip): Promise<void> {

        const result = await this.prismaService.spaceShip.findFirst({ where: { id: spaceSchip.id.valueId } });

        if (!result) {
            return null;
        }

        await this.prismaService.spaceShip.update({ where: { id: spaceSchip.id.valueId }, data: SpaceShipPrismaMapper.toDatabase(spaceSchip) });
    }

    async delete(id: string): Promise<void> {
        const spaceSchip = await this.prismaService.spaceShip.findFirst({ where: { id } });

        if (!spaceSchip) {
            return null;
        }

        await this.prismaService.spaceShip.delete({ where: { id: spaceSchip.id } });
    }
}