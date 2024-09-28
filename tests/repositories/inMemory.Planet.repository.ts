import { Planet } from "src/domain/planet/entity/planet.entity";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";

export class InMemoryPlanetRepository implements PlanetRepository {
    itens: Planet[] = [];

    async create(planet: Planet): Promise<Planet> {
        await this.itens.push(planet);

        return planet;
    }
}