import { Character as CharacterDatabase } from "@prisma/client";
import Idendity from "src/core/generics/identity";
import { Character } from "src/domain/character/entity/character.entity";

export class CharacterPrismaMapper {

    static toDomain(entity: CharacterDatabase, planet?: string): Character {
        return Character.create(
            {
                name: entity.name,
                affiliation: entity.affiliation,
                race: entity.race,
                homePlanetId: entity.planetId,
                homePlanet: planet
            },
            new Idendity(entity.id)
        )
    }

    static toDatabase(entity: Character): CharacterDatabase {
        return {
            id: entity.id.valueId,
            name: entity.name,
            race: entity.race,
            affiliation: entity.affiliation,
            planetId: entity.homePlanetId
        }
    }
}