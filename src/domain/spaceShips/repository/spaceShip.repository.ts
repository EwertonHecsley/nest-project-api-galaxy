import { SpaceShip } from "../entity/spaceShips.entity";

export abstract class SpaceShipRepository {
    abstract create(spaceShip: SpaceShip): Promise<SpaceShip>;
    abstract list(): Promise<SpaceShip[]>;
    abstract find(id: string): Promise<SpaceShip>;
    abstract save(spaceSchip: SpaceShip): Promise<void>;
    abstract delete(id: string): Promise<void>;
}