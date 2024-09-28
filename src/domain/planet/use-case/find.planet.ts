import { Either, left, right } from "../../errors/either/either";
import { PlanetRepository } from "../repository/planet.repository";
import { NotFoundException } from "@nestjs/common";
import { Planet } from "../entity/planet.entity";

type Request = {
    id: string;
}

type Response = Either<NotFoundException, Planet>;

export class FindPlanetUseCase {

    constructor(private readonly planetRepsitory: PlanetRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const planet = await this.planetRepsitory.findMany(id);

        if (!planet) return left(new NotFoundException(`Planet with id ${id} not found.`));

        return right(planet);
    }
}