import { Either, right } from "src/domain/errors/either/either";
import { SpaceShip } from "../entity/spaceShips.entity";
import { SpaceShipRepository } from "../repository/spaceShip.repository";

type Request = {
    name: string;
    model: string;
    manufacturer: string;
    passengerCapacity: number;
}

type Response = Either<null, SpaceShip>

export class CreateSpaceShipUseCase {

    constructor(private readonly spaceShipRepository: SpaceShipRepository) { }

    async execute(spaceShip: Request): Promise<Response> {

        const newSpaceShip = SpaceShip.create(spaceShip);

        if (!newSpaceShip) {
            return null;
        }

        await this.spaceShipRepository.create(newSpaceShip);

        return right(newSpaceShip);
    }
}