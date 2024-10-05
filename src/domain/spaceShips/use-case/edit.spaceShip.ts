import { Either, left, right } from "src/domain/errors/either/either";
import { SpaceShipRepository } from "../repository/spaceShip.repository";
import { NotFoundException } from "@nestjs/common";

type Request = {
    id: string,
    name?: string;
    model?: string;
    manufacturer?: string;
    passengerCapacity?: number;
}

type Response = Either<null | NotFoundException, boolean>

export class EditSpaceShipUseCase {

    constructor(private readonly spaceShipRepository: SpaceShipRepository) { }

    async execute(data: Request): Promise<Response> {

        const spaceShip = await this.spaceShipRepository.find(data.id);

        if (!spaceShip) {
            return left(new NotFoundException(`SpaceShip with id ${data.id} not found.`));
        }

        if (data.name) { spaceShip.name = data.name; }
        if (data.model) spaceShip.model = data.model;
        if (data.manufacturer) spaceShip.manufacturer = data.manufacturer;
        if (data.passengerCapacity) spaceShip.passengerCapacity = data.passengerCapacity;

        await this.spaceShipRepository.save(spaceShip);

        return right(true);
    }
}