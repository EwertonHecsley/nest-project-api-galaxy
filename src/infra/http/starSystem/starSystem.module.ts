import { Module } from "@nestjs/common";
import { StarSystemRepository } from "src/domain/starSystem/repository/starSystem.repository";
import { CreateStarSystemUseCase } from "src/domain/starSystem/use-case/create.starSystem";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateStarSystemController } from "./controller/create.controller";
import { FindStarSystemController } from "./controller/find.controller";
import { FindStarSystemUseCase } from "src/domain/starSystem/use-case/find.starSystem";
import { ListStarSystemController } from "./controller/list.controller";
import { ListStarSystemUseCase } from "src/domain/starSystem/use-case/list.starSystem";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: CreateStarSystemUseCase,
            useFactory: (starSystemRepository: StarSystemRepository) => {
                return new CreateStarSystemUseCase(starSystemRepository);
            },
            inject: [StarSystemRepository]
        },
        {
            provide: FindStarSystemUseCase,
            useFactory: (starSystemRepository: StarSystemRepository) => {
                return new FindStarSystemUseCase(starSystemRepository);
            },
            inject: [StarSystemRepository]
        },
        {
            provide: ListStarSystemUseCase,
            useFactory: (starSystemRepository: StarSystemRepository) => {
                return new ListStarSystemUseCase(starSystemRepository);
            },
            inject: [StarSystemRepository]
        }
    ],
    controllers: [CreateStarSystemController, FindStarSystemController, ListStarSystemController]
})
export class StarSystemModule { }