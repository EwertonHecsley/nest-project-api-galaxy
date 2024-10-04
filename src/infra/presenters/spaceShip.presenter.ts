import { SpaceShip } from "src/domain/spaceShips/entity/spaceShips.entity";

export class SpaceShipPresenter {

    static toHTTP(entity: SpaceShip) {
        return {
            id: entity.id.valueId,
            name: entity.name,
            model: entity.model,
            manufacturer: entity.manufacturer,
            passengerCapacity: entity.passengerCapacity
        }
    }
}