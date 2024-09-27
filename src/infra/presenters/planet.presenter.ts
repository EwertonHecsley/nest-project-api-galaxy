import { Planet } from "src/domain/planet/entity/planet.entity";

export class PlanetPresenter {

    static toHTTP(planet: Planet) {
        return {
            id: planet.id.valueId,
            name: planet.name,
            climate: planet.climate,
            terrain: planet.terrain,
            population: planet.population,
        }
    }
}