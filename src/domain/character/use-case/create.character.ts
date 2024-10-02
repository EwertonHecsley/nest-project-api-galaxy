import { Either, left, right } from "src/domain/errors/either/either";
import { CharacterRepository } from "../repository/character.repository";
import { NotFoundException } from "@nestjs/common";
import { Character } from "../entity/character.entity";

type Request = {
    name: string;
    race: string;
    affiliation: string;
    homePlanetId: string
}

type Response = Either<null | NotFoundException, Character>;

export class CreateCharacterUseCase {

    constructor(private readonly characterRepository: CharacterRepository) { }

    async execute(data: Request): Promise<Response> {
        const character = Character.create({ ...data });

        const result = await this.characterRepository.create(character);

        if (!result) {
            return left(new NotFoundException('Planet not found'));
        }

        return right(result);
    }
}