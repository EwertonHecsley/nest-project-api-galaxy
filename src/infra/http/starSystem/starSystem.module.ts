import { Module } from "@nestjs/common";
import { StarSystemRepository } from "src/domain/starSystem/repository/starSystem.repository";
import { CreateStarSystemUseCase } from "src/domain/starSystem/use-case/create.starSystem";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateStarSystemController } from "./controller/create.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: CreateStarSystemUseCase,
            useFactory: (starSystemRepository: StarSystemRepository) => {
                return new CreateStarSystemUseCase(starSystemRepository);
            },
            inject: [StarSystemRepository]
        }
    ],
    controllers: [CreateStarSystemController]
})
export class StarSystemModule { }