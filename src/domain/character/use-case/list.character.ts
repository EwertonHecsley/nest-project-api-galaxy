import { Either, right } from "src/domain/errors/either/either";
import { CharacterRepository } from "../repository/character.repository";
import { Character } from "../entity/character.entity";
import { InternalServerErrorException } from "@nestjs/common";

type Response = Either<null, Character[]>;

export class ListCharactersUseCase {

    constructor(private readonly characterRepository: CharacterRepository) { }

    async execute(): Promise<Response> {
        const result = await this.characterRepository.list();

        if (!result) {
            throw new InternalServerErrorException();
        }

        return right(result);
    }
}