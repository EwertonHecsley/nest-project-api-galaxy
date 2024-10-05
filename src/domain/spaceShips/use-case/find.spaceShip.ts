import { Either, left, right } from "src/domain/errors/either/either";
import { SpaceShipRepository } from "../repository/spaceShip.repository";
import { NotFoundException } from "@nestjs/common";
import { SpaceShip } from "../entity/spaceShips.entity";

type Request = {
    id: string;
}

type Response = Either<null | NotFoundException, SpaceShip>

export class FindSpaceShipUseCase {

    constructor(private readonly spaceShipRepository: SpaceShipRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const spaceShip = await this.spaceShipRepository.find(id);

        if (!spaceShip) return left(new NotFoundException(`SpaceShip with id ${id} not found.`));

        return right(spaceShip);
    }
}