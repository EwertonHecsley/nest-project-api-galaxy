import { Either, left, right } from "src/domain/errors/either/either";
import { StarSystemRepository } from "../repository/starSystem.repository";
import { BadRequestException, NotFoundException } from "@nestjs/common";

type Request = {
    id: string;
    name?: string;
    description?: string;
}

type Response = Either<null | NotFoundException | BadRequestException, boolean>

export class EditStarSystemUseCase {

    constructor(private readonly starSystemRepository: StarSystemRepository) { }

    async execute(starSystemData: Request): Promise<Response> {
        const starSystem = await this.starSystemRepository.findMany(starSystemData.id);

        if (!starSystem) {
            return left(new NotFoundException(`Star system with id ${starSystemData.id} not found.`));
        }

        if (starSystemData.name == starSystem.name) {
            return left(new BadRequestException(`Star system with name ${starSystemData.name}`));
        }

        if (starSystemData.name) starSystem.name = starSystemData.name;
        if (starSystemData.description) starSystem.description = starSystemData.description;

        await this.starSystemRepository.save(starSystem);

        return right(true);
    }
}