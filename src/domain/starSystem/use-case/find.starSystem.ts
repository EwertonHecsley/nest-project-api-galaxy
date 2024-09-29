import { Either, left, right } from "src/domain/errors/either/either";
import { StarSystemRepository } from "../repository/starSystem.repository";
import { NotFoundException } from "@nestjs/common";
import StarSystem from "../entity/starSystem.entity";

type Request = {
    id: string;
}

type Response = Either<NotFoundException, StarSystem>;

export class FindStarSystemUseCase {

    constructor(private readonly starSystemRepository: StarSystemRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const starSystem = await this.starSystemRepository.findMany(id);

        if (!starSystem) return left(new NotFoundException(`Star system with id ${id} not found.`));

        return right(starSystem);
    }
}