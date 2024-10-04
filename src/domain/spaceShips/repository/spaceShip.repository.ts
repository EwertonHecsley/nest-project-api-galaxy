import { SpaceShip } from "../entity/spaceShips.entity";

export abstract class SpaceShipRepository {
    abstract list(): Promise<SpaceShip[]>;
}