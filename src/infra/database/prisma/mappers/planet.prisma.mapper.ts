import { Planet as PlanetDatabase } from "@prisma/client";
import Idendity from "src/core/generics/identity";
import { Planet } from "src/domain/planet/entity/planet.entity";

export class PlanetPrismaMapper {

    static toDomain(entity: PlanetDatabase): Planet {
        return Planet.create(
            {
                name: entity.name,
                climate: entity.climate,
                terrain: entity.terrain,
                population: entity.population,

            }, new Idendity(entity.id)
        );
    }

    static toDatabase(entity: Planet): PlanetDatabase {
        return {
            id: entity.id.valueId,
            name: entity.name,
            climate: entity.climate,
            terrain: entity.terrain,
            population: entity.population,
            starSystemId: entity.id.valueId
        }
    }
}