import StarSystem from "src/domain/starSystem/entity/starSystem.entity";
import { PlanetPresenter } from "./planet.presenter";

export class StarSystemPresenter {

    static toHTTP(starSystem: StarSystem) {
        return {
            id: starSystem.id.valueId,
            name: starSystem.name,
            description: starSystem.description,
            planets: starSystem.planets.map((planet) => PlanetPresenter.toHTTP(planet))
        }
    }
}