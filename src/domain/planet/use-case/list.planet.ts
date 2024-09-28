import { Either, right } from "../../errors/either/either";
import { Planet } from "../entity/planet.entity";
import { PlanetRepository } from "../repository/planet.repository";

type Response = Either<null, Planet[]>

export class ListPlanetsUseCase {

    constructor(private planetRepository: PlanetRepository) { }

    async execute(): Promise<Response> {
        const planetList = await this.planetRepository.list();

        return right(planetList);
    }
}