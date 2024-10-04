import Entity from "src/core/generics/entity";

type SpaceShipType = {
    name: string;
    model: string;
    manufacturer: string;
    passengerCapacity: number;
}

export class spaceShip extends Entity<SpaceShipType> { }