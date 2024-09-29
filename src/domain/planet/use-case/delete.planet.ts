import { Either, left, right } from "../../errors/either/either";
import { PlanetRepository } from "../repository/planet.repository";
import { NotFoundException } from "@nestjs/common";

type Request = {
    id: string;
}

type Response = Either<NotFoundException, boolean>;

export class DeletePlanetUseCase {

    constructor(private readonly planetRepository: PlanetRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const planet = await this.planetRepository.findMany(id);

        if (!planet) {
            return left(new NotFoundException(`Planet with id ${id} not found.`));
        }

        await this.planetRepository.delete(id);

        return right(true);
    }

}