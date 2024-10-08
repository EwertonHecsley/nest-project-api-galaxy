import { Planet } from "../entity/planet.entity";

export abstract class PlanetRepository {
    abstract create(planet: Planet): Promise<Planet>;
    abstract findMany(id: string): Promise<Planet>;
    abstract findByName(name: string): Promise<Planet>;
    abstract list(): Promise<Planet[]>;
    abstract save(planet: Planet): Promise<void>;
    abstract delete(id: string): Promise<void>;
}