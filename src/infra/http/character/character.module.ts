import { Module } from "@nestjs/common";
import { CharacterRepository } from "src/domain/character/repository/character.repository";
import { CreateCharacterUseCase } from "src/domain/character/use-case/create.character";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateCharacterController } from "./controller/create.controller";
import { ListCharacterController } from "./controller/list.controller";
import { ListCharactersUseCase } from "src/domain/character/use-case/list.character";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: CreateCharacterUseCase,
            useFactory: (characterRepository: CharacterRepository) => {
                return new CreateCharacterUseCase(characterRepository);
            },
            inject: [CharacterRepository]
        },
        {
            provide: ListCharactersUseCase,
            useFactory: (characterRepository: CharacterRepository) => {
                return new ListCharactersUseCase(characterRepository);
            },
            inject: [CharacterRepository]
        }
    ],
    controllers: [CreateCharacterController, ListCharacterController]
})
export class CharacterModule { }