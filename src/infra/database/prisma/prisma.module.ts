import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import { PlanetPrismaRepository } from "../repositories/planet.prisma.repository";
import { StarSystemRepository } from "src/domain/starSystem/repository/starSystem.repository";
import { StarSystemPrismaRepository } from "../repositories/starSystem.prisma.repository";
import { CharacterRepository } from "src/domain/character/repository/character.repository";
import { CharacterPrismaRepository } from "../repositories/character.prisma.repository";

@Module({
    providers: [
        PrismaService,
        { provide: PlanetRepository, useClass: PlanetPrismaRepository },
        { provide: StarSystemRepository, useClass: StarSystemPrismaRepository },
        { provide: CharacterRepository, useClass: CharacterPrismaRepository }
    ],
    exports: [PrismaService, PlanetRepository, StarSystemRepository, CharacterRepository]
})
export class PrismaModule { }