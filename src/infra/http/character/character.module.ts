import { Module } from "@nestjs/common";
import { CharacterRepository } from "src/domain/character/repository/character.repository";
import { CreateCharacterUseCase } from "src/domain/character/use-case/create.character";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateCharacterController } from "./controller/create.controller";
import { ListCharacterController } from "./controller/list.controller";
import { ListCharactersUseCase } from "src/domain/character/use-case/list.character";
import { FindCharacterController } from "./controller/find.controller";
import { FindCharacterUseCase } from "src/domain/character/use-case/find.character";
import { EditCharacterController } from "./controller/edit.controller";
import { EditCharacterUseCase } from "src/domain/character/use-case/edit.character";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import { DeleteCharacterCotroller } from "./controller/delete.controller";
import { DeleteCharacterUseCase } from "src/domain/character/use-case/delete.character";

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
        },
        {
            provide: FindCharacterUseCase,
            useFactory: (characterRepository: CharacterRepository) => {
                return new FindCharacterUseCase(characterRepository);
            },
            inject: [CharacterRepository]
        },
        {
            provide: EditCharacterUseCase,
            useFactory: (characterRepository: CharacterRepository, planetRepository: PlanetRepository) => {
                return new EditCharacterUseCase(characterRepository, planetRepository);
            },
            inject: [CharacterRepository]
        },
        {
            provide: DeleteCharacterUseCase,
            useFactory: (characterRepository: CharacterRepository) => {
                return new DeleteCharacterUseCase(characterRepository);
            },
            inject: [CharacterRepository]
        }
    ],
    controllers: [CreateCharacterController, ListCharacterController, FindCharacterController, EditCharacterController, DeleteCharacterCotroller]
})
export class CharacterModule { }