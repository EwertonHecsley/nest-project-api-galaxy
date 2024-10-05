import { Either, left, right } from "src/domain/errors/either/either";
import { SpaceShipRepository } from "../repository/spaceShip.repository";
import { NotFoundException } from "@nestjs/common";

type Request = {
    id: string;
}

type Response = Either<null | NotFoundException, boolean>;

export class DeleteSpaceShipUseCase {

    constructor(private readonly spaceShipRepository: SpaceShipRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const result = await this.spaceShipRepository.find(id);

        if (!result) {
            return left(new NotFoundException(`SpaceShip with id ${id} not found.`));
        }

        await this.spaceShipRepository.delete(id);

        return right(true);
    }
}