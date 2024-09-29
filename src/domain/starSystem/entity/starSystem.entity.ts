import { Planet } from "src/domain/planet/entity/planet.entity";
import Entity from "../../../core/generics/entity";
import Idendity from "../../../core/generics/identity";

type StarSystemType = {
    name: string;
    description: string;
    planets?: Planet[];
}

export default class StarSystem extends Entity<StarSystemType> {

    static create(starSystemData: Partial<StarSystemType>, id?: Idendity) {
        return new StarSystem(
            {
                name: starSystemData.name,
                description: starSystemData.description,
                planets: starSystemData.planets?.map((planet) => Planet.create(planet, planet.id)) ?? []
            },
            id
        );
    }

    get name(): string {
        return this.attributes.name;
    }

    get description(): string {
        return this.attributes.description;
    }

    get planets(): Planet[] {
        return this.attributes.planets;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set description(description: string) {
        this.attributes.description = description;
    }

    set planets(planets: Planet[]) {
        this.attributes.planets = planets;
    }
}