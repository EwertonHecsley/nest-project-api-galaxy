import { Either, left, right } from "src/domain/errors/either/either";
import { StarSystemRepository } from "../repository/starSystem.repository";
import StarSystem from "../entity/starSystem.entity";

type Response = Either<null, StarSystem[]>;

export class ListStarSystemUseCase {

    constructor(private readonly starSystemRepository: StarSystemRepository) { }

    async execute(): Promise<Response> {
        const starSystems = await this.starSystemRepository.list();

        if (!starSystems) return left(null);

        return right(starSystems);
    }
}