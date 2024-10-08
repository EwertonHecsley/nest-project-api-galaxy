import { Module } from "@nestjs/common";
import { CreatePlanetController } from "./controllers/create.controller";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreatePlanetUseCase } from "src/domain/planet/use-case/create.planet";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import { FindPlanetUseCase } from "src/domain/planet/use-case/find.planet";
import { FindPlanetController } from "./controllers/find.controller";
import { ListPlanetController } from "./controllers/list.controller";
import { ListPlanetsUseCase } from "src/domain/planet/use-case/list.planet";
import { EditPlanetController } from "./controllers/edit.controller";
import { EditPlanetUseCase } from "src/domain/planet/use-case/edit.planet";
import { DeletePlanetUseCase } from "src/domain/planet/use-case/delete.planet";
import { DeletePlanetController } from "./controllers/delete.controller";
import { StarSystemRepository } from "src/domain/starSystem/repository/starSystem.repository";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: CreatePlanetUseCase,
            useFactory: (planetRepsitory: PlanetRepository, starSystemRepository: StarSystemRepository) => {
                return new CreatePlanetUseCase(planetRepsitory, starSystemRepository);
            },
            inject: [PlanetRepository, StarSystemRepository]
        },
        {
            provide: FindPlanetUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new FindPlanetUseCase(planetRepository);
            },
            inject: [PlanetRepository]
        },
        {
            provide: ListPlanetsUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new ListPlanetsUseCase(planetRepository);
            },
            inject: [PlanetRepository]
        },
        {
            provide: EditPlanetUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new EditPlanetUseCase(planetRepository);
            },
            inject: [PlanetRepository]
        },
        {
            provide: DeletePlanetUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new DeletePlanetUseCase(planetRepository);
            },
            inject: [PlanetRepository]
        }
    ],
    controllers: [CreatePlanetController, FindPlanetController, ListPlanetController, EditPlanetController, DeletePlanetController]
})
export class PlanetMoodule { }