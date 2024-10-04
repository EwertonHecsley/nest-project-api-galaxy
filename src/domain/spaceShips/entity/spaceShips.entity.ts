import Entity from "src/core/generics/entity";
import Idendity from "src/core/generics/identity";

type SpaceShipType = {
    name: string;
    model: string;
    manufacturer: string;
    passengerCapacity: number;
}

export class SpaceShip extends Entity<SpaceShipType> {

    static create(entity: SpaceShipType, id?: Idendity): SpaceShip {
        return new SpaceShip({ ...entity }, id);
    }

    get name(): string {
        return this.attributes.name;
    }

    get model(): string {
        return this.attributes.model;
    }

    get manufacturer(): string {
        return this.attributes.manufacturer;
    }

    get passengerCapacity(): number {
        return this.attributes.passengerCapacity;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set model(model: string) {
        this.attributes.model = model;
    }

    set manufacturer(manufacturer: string) {
        this.attributes.manufacturer = manufacturer;
    }

    set passengerCapacity(passengerCapacity: number) {
        this.attributes.passengerCapacity = passengerCapacity;
    }
}