import { Module } from "@nestjs/common";
import { SpaceShipRepository } from "src/domain/spaceShips/repository/spaceShip.repository";
import { ListSpaceShipUseCase } from "src/domain/spaceShips/use-case/list.spaceShip";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListSpaceShipController } from "./controller/list.controller";
import { CreateSpaceShipController } from "./controller/create.cotroller";
import { CreateSpaceShipUseCase } from "src/domain/spaceShips/use-case/create.spaceSchip";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: ListSpaceShipUseCase,
            useFactory: (spaceShipRepository: SpaceShipRepository) => {
                return new ListSpaceShipUseCase(spaceShipRepository);
            },
            inject: [SpaceShipRepository]
        },
        {
            provide: CreateSpaceShipUseCase,
            useFactory: (spaceShipRepository: SpaceShipRepository) => {
                return new CreateSpaceShipUseCase(spaceShipRepository);
            },
            inject: [SpaceShipRepository]
        }
    ],
    controllers: [ListSpaceShipController, CreateSpaceShipController]
})
export class SpaceShipModule { }