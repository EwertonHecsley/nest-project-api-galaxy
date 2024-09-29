import StarSystem from "../entity/starSystem.entity";

export abstract class StarSystemRepository {
    abstract create(starSystem: StarSystem): Promise<StarSystem>;
}