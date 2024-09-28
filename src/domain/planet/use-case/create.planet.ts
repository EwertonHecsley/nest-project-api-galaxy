import { Either, right } from "../../errors/either/either";
import { Planet } from "../entity/planet.entity";
import { PlanetRepository } from "../repository/planet.repository";


type Request = {
    name: string;
    climate: string;
    terrain: string;
    population: number;
}

type Response = Either<null, Planet>;

export class CreatePlanetUseCase {

    constructor(private readonly planetRepository: PlanetRepository) { }

    async execute(plateData: Request): Promise<Response> {
        const planet = Planet.create(plateData);
        await this.planetRepository.create(planet);

        return right(planet);
    }
}