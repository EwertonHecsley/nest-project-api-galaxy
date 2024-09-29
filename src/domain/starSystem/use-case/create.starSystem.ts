import { Planet } from "src/domain/planet/entity/planet.entity";
import { StarSystemRepository } from "../repository/starSystem.repository";
import StarSystem from "../entity/starSystem.entity";
import { Either, right } from "src/domain/errors/either/either";

type StarSystemType = {
    name: string;
    description: string;
    planets?: Planet[]
}

type Response = Either<null, StarSystem>

export class CreateStarSystemUseCase {

    constructor(private readonly starSystemRepository: StarSystemRepository) { }

    async execute(starSystemData: StarSystemType): Promise<Response> {

        const newStarSystem = StarSystem.create(
            {
                name: starSystemData.name,
                description: starSystemData.description,
                planets: starSystemData.planets || []
            }
        );

        const starSystem = await this.starSystemRepository.create(newStarSystem);

        return right(starSystem);

    }
}