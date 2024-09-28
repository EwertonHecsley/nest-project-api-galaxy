import { Either, left, right } from "../../errors/either/either";
import { PlanetRepository } from "../repository/planet.repository";
import { BadRequestException, NotFoundException } from "@nestjs/common";

type Request = {
    id: string;
    name?: string;
    climate?: string;
    terrain?: string;
    population?: number;
}

type Response = Either<NotFoundException | BadRequestException, boolean>

export class EditPlanetUseCase {

    constructor(private readonly planetRepository: PlanetRepository) { }

    async execute(planetData: Request): Promise<Response> {
        const planet = await this.planetRepository.findMany(planetData.id);

        if (!planet) {
            return left(new NotFoundException(`Planet with id ${planetData.id} not found.`));
        }

        if (planetData.name == planet.name) {
            return left(new BadRequestException('Planet name is not changed'));
        }

        if (planetData.name) planet.name = planetData.name;
        if (planetData.climate) planet.climate = planetData.climate;
        if (planetData.terrain) planet.terrain = planetData.terrain;
        if (planetData.population !== undefined) planet.population = planetData.population;

        await this.planetRepository.save(planet);

        return right(true);
    }
}