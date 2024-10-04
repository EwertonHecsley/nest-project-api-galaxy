import { Either, right } from "src/domain/errors/either/either";
import { SpaceShipRepository } from "../repository/spaceShip.repository";
import { SpaceShip } from "../entity/spaceShips.entity";

type Response = Either<null, SpaceShip[]>

export class ListSpaceShipUseCase {

    constructor(private readonly spaceShipRepository: SpaceShipRepository) { }

    async execute(): Promise<Response> {
        const result = await this.spaceShipRepository.list();

        return right(result)
    }
}