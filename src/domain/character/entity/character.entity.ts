import Entity from "src/core/generics/entity";
import Idendity from "src/core/generics/identity";

type CharacterType = {
    name: string;
    race: string;
    affiliation: string;
    homePlanetId: string;
    homePlanet?: string;
}

export class Character extends Entity<CharacterType> {

    static create(character: CharacterType, id?: Idendity) {
        return new Character(
            {
                name: character.name,
                race: character.race,
                affiliation: character.affiliation,
                homePlanetId: character.homePlanetId,
                homePlanet: character.homePlanet
            },
            id
        )
    }

    get name(): string {
        return this.attributes.name;
    }

    get race(): string {
        return this.attributes.race;
    }

    get affiliation(): string {
        return this.attributes.affiliation;
    }

    get homePlanetId(): string {
        return this.attributes.homePlanetId;
    }

    get homePlanet(): string {
        return this.attributes.homePlanet;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set race(race: string) {
        this.attributes.race = race;
    }

    set affiliation(affiliation: string) {
        this.attributes.affiliation = affiliation;
    }

    set homePlanet(homePlanet: string) {
        this.attributes.homePlanet = homePlanet;
    }

    set homePlanetId(planetId: string) {
        this.attributes.homePlanetId = planetId
    }
}