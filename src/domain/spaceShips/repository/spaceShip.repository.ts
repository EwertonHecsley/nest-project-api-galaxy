import { SpaceShip } from "../entity/spaceShips.entity";

export abstract class SpaceShipRepository {
    abstract create(spaceShip: SpaceShip): Promise<SpaceShip>;
    abstract list(): Promise<SpaceShip[]>;
}