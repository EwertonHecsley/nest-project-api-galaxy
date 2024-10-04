import { Module } from "@nestjs/common";
import { SpaceShipRepository } from "src/domain/spaceShips/repository/spaceShip.repository";
import { ListSpaceShipUseCase } from "src/domain/spaceShips/use-case/list.spaceShip";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListSpaceShipController } from "./controller/list.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: ListSpaceShipUseCase,
            useFactory: (spaceShipRepository: SpaceShipRepository) => {
                return new ListSpaceShipUseCase(spaceShipRepository);
            },
            inject: [SpaceShipRepository]
        }
    ],
    controllers: [ListSpaceShipController]
})
export class SpaceShipModule { }