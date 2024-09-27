import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import { PlanetPrismaRepository } from "../repositories/planet.prisma.repository";

@Module({
    providers: [
        PrismaService,
        { provide: PlanetRepository, useClass: PlanetPrismaRepository }
    ],
    exports: [PrismaService, PlanetRepository]
})
export class PrismaModule { }