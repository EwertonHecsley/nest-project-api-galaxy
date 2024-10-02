import { Character } from "src/domain/character/entity/character.entity";

export class CharacterPresenter {

    static toHTTP(character: Character) {
        return {
            id: character.id.valueId,
            name: character.name,
            race: character.race,
            affiliation: character.affiliation,
            homePlanetId: character.homePlanetId,
            PlanetName: character.homePlanet
        }
    }
}