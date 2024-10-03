import { Either, left, right } from "src/domain/errors/either/either";
import { CharacterRepository } from "../repository/character.repository";
import { NotFoundException } from "@nestjs/common";
import { Character } from "../entity/character.entity";

type Request = {
    id: string;
}

type Response = Either<null | NotFoundException, Character>;

export class FindCharacterUseCase {

    constructor(private readonly characterRepository: CharacterRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const character = await this.characterRepository.find(id);

        if (!character) return left(new NotFoundException(`Character with id ${id} not found.`));

        return right(character);
    }
}