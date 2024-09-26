import Entity from "src/core/generics/entity";
import Idendity from "src/core/generics/identity";

type PlanetType = {
    name: string;
    climate: string;
    terrain: string;
    population: number;
}

export class Planet extends Entity<PlanetType> {

    static create(planetData: PlanetType, id?: Idendity): Planet {
        return new Planet({ ...planetData }, id);
    }

    get name(): string {
        return this.attributes.name;
    }

    get climate(): string {
        return this.attributes.climate;
    }

    get terrain(): string {
        return this.attributes.terrain;
    }

    get population(): number {
        return this.attributes.population;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set climate(climate: string) {
        this.attributes.climate = climate;
    }

    set terrain(terrain: string) {
        this.attributes.terrain = terrain;
    }

    set population(population: number) {
        this.attributes.population = population;
    }
}