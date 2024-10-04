import { Either, left, right } from "src/domain/errors/either/either";
import { StarSystemRepository } from "../repository/starSystem.repository";
import { BadRequestException, NotFoundException } from "@nestjs/common";

type Request = {
    id: string;
}

type Response = Either<NotFoundException | BadRequestException, boolean>;

export class DeleteStarSystemUseCase {

    constructor(private readonly starSystemRepository: StarSystemRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const starSystem = await this.starSystemRepository.findMany(id);

        if (!starSystem) {
            return left(new NotFoundException(`Star system with id ${id} not found.`));
        }

        if (starSystem.planets.length > 0) {
            return left(new BadRequestException('Star system contains planets. Delete planets first.'));
        }

        await this.starSystemRepository.delete(id);

        return right(true);
    }

}