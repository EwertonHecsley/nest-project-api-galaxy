import StarSystem from "../entity/starSystem.entity";

export abstract class StarSystemRepository {
    abstract create(starSystem: StarSystem): Promise<StarSystem>;
    abstract findMany(id: string): Promise<StarSystem>;
    abstract list(): Promise<StarSystem[]>;
    abstract save(starSystem: StarSystem): Promise<void>;
}