import { BadRequestException, NotFoundException } from "@nestjs/common";
import { Either, left, right } from "../../errors/either/either";
import { Planet } from "../entity/planet.entity";
import { PlanetRepository } from "../repository/planet.repository";
import { StarSystemRepository } from "../../starSystem/repository/starSystem.repository";


type Request = {
    name: string;
    climate: string;
    terrain: string;
    population: number;
    starSystemId: string;
}

type Response = Either<null | BadRequestException | NotFoundException, Planet>;

export class CreatePlanetUseCase {

    constructor(
        private readonly planetRepository: PlanetRepository,
        private readonly starSystemRepository: StarSystemRepository
    ) { }

    async execute(planetData: Request): Promise<Response> {

        const PlanetExist = await this.planetRepository.findByName(planetData.name);

        if (PlanetExist) {
            return left(new BadRequestException('Planet is ready'));
        }

        const starSystemExist = await this.starSystemRepository.findMany(planetData.starSystemId);

        if (!starSystemExist) {
            return left(new NotFoundException('StarSystem not found'));
        }

        const planet = Planet.create(
            {
                name: planetData.name,
                climate: planetData.climate,
                terrain: planetData.terrain,
                population: planetData.population,
                starSystemId: planetData.starSystemId
            }
        );

        const result = await this.planetRepository.create(planet);

        return right(result);
    }
}