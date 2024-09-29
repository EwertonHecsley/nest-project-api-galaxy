import { StarSystem as StarSystemDatabase } from "@prisma/client";
import Idendity from "src/core/generics/identity";
import StarSystem from "src/domain/starSystem/entity/starSystem.entity";

export class StarSystemPrismaMapper {

    static toDomain(entity: any): StarSystem {
        return StarSystem.create(
            {
                name: entity.name,
                description: entity.description,
                planets: entity.planets,
            },
            new Idendity(entity.id)
        )
    }

    static toDatabase(entity: StarSystem): StarSystemDatabase {
        return {
            id: entity.id.valueId,
            name: entity.name,
            description: entity.description
        }
    }
}