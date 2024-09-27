import { Module } from "@nestjs/common";
import { CreatePlanetController } from "./controllers/create.controller";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreatePlanetUseCase } from "src/domain/planet/use-case/create.planet";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: CreatePlanetUseCase,
            useFactory: (planetRepsitory: PlanetRepository) => {
                return new CreatePlanetUseCase(planetRepsitory);
            },
            inject: [PlanetRepository]
        }
    ],
    controllers: [CreatePlanetController]
})
export class PlanetMoodule { }