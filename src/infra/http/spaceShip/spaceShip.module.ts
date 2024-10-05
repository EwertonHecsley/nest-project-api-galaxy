import { Module } from "@nestjs/common";
import { SpaceShipRepository } from "src/domain/spaceShips/repository/spaceShip.repository";
import { ListSpaceShipUseCase } from "src/domain/spaceShips/use-case/list.spaceShip";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListSpaceShipController } from "./controller/list.controller";
import { CreateSpaceShipController } from "./controller/create.cotroller";
import { CreateSpaceShipUseCase } from "src/domain/spaceShips/use-case/create.spaceSchip";
import { FindSpaceShipController } from "./controller/find.controller";
import { FindSpaceShipUseCase } from "src/domain/spaceShips/use-case/find.spaceShip";
import { EditSpaceShipUseCase } from "src/domain/spaceShips/use-case/edit.spaceShip";
import { EditSpaceShipController } from "./controller/edit.cotroller";
import { DeleteSpaceShipController } from "./controller/delete.controller";
import { DeleteSpaceShipUseCase } from "src/domain/spaceShips/use-case/delete.spaceShip";

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
        },
        {
            provide: FindSpaceShipUseCase,
            useFactory: (spaceShipRepository: SpaceShipRepository) => {
                return new FindSpaceShipUseCase(spaceShipRepository);
            },
            inject: [SpaceShipRepository]
        },
        {
            provide: EditSpaceShipUseCase,
            useFactory: (spaceShipRepository: SpaceShipRepository) => {
                return new EditSpaceShipUseCase(spaceShipRepository);
            },
            inject: [SpaceShipRepository]
        },
        {
            provide: DeleteSpaceShipUseCase,
            useFactory: (spaceShipRepository: SpaceShipRepository) => {
                return new DeleteSpaceShipUseCase(spaceShipRepository);
            },
            inject: [SpaceShipRepository]
        }
    ],
    controllers: [ListSpaceShipController, CreateSpaceShipController, FindSpaceShipController, EditSpaceShipController, DeleteSpaceShipController]
})
export class SpaceShipModule { }