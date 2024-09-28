import { Planet } from "src/domain/planet/entity/planet.entity";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";

export class InMemoryPlanetRepository implements PlanetRepository {
    itens: Planet[] = [];

    async create(planet: Planet): Promise<Planet> {
        await this.itens.push(planet);

        return planet;
    }

    async findMany(id: string): Promise<Planet> {
        const data = await this.itens.find((elment) => elment.id.valueId == id);

        return data;
    }

    async findByName(name: string): Promise<Planet> {
        const data = await this.itens.find((elment) => elment.name == name);

        return data;
    }

    async list(): Promise<Planet[]> {
        return this.itens
    }
}