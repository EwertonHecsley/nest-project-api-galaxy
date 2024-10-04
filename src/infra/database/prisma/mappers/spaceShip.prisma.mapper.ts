import { SpaceShip as SpaceShipDatabase } from "@prisma/client";
import Idendity from "src/core/generics/identity";
import { SpaceShip } from "src/domain/spaceShips/entity/spaceShips.entity";

export class SpaceShipPrismaMapper {

    static toDomain(entity: SpaceShipDatabase): SpaceShip {
        return SpaceShip.create(
            {
                name: entity.name,
                model: entity.model,
                manufacturer: entity.manufacturer,
                passengerCapacity: entity.passengerCapacity
            },
            new Idendity(entity.id)
        );
    }

    static toDatabase(entity: SpaceShip): SpaceShipDatabase {
        return {
            id: entity.id.valueId,
            name: entity.name,
            model: entity.model,
            manufacturer: entity.manufacturer,
            passengerCapacity: entity.passengerCapacity
        }
    }
}