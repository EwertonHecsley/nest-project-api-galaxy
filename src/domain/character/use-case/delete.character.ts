import { Either, left, right } from "src/domain/errors/either/either";
import { CharacterRepository } from "../repository/character.repository";
import { NotFoundException } from "@nestjs/common";

type Request = {
    id: string;
}

type Response = Either<NotFoundException, boolean>;

export class DeleteCharacterUseCase {

    constructor(private readonly characterRepository: CharacterRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const character = await this.characterRepository.find(id);

        if (!character) {
            return left(new NotFoundException(`Character with id ${id} not found.`));
        }

        await this.characterRepository.delete(character.id.valueId);

        return right(true);
    }
}