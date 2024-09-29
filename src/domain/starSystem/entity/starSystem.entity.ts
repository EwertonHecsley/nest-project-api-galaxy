import Entity from "src/core/generics/entity";
import Idendity from "src/core/generics/identity";
import { Planet } from "src/domain/planet/entity/planet.entity";

type StarSystemType = {
    name: string;
    description: string;
    planets: Planet[]
}

export default class StarSystem extends Entity<StarSystemType> {

    static create(starSystemData: Partial<StarSystemType>, id?: Idendity) {
        const defaultData: StarSystemType = {
            name: "",
            description: "",
            planets: []
        }

        const data: StarSystemType = {
            ...defaultData,
            ...starSystemData
        }

        return new StarSystem(data, id);
    }

    addPlanet(planet: Planet): void {
        this.attributes.planets.push(planet);
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