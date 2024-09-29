import { StarSystem as StarSystemDatabase } from "@prisma/client";
import Idendity from "src/core/generics/identity";
import StarSystem from "src/domain/starSystem/entity/starSystem.entity";

export class StarSystemPrismaMapper {

    static toDomain(entity: StarSystemDatabase): StarSystem {
        return StarSystem.create(
            {
                name: entity.name,
                description: entity.description
            }, new Idendity(entity.id)
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