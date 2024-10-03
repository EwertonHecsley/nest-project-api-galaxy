import { Character } from "../entity/character.entity";

export abstract class CharacterRepository {
    abstract create(character: Character): Promise<Character>;
    abstract list(): Promise<Character[]>;
    abstract find(id: string): Promise<Character>;
    abstract save(character: Character): Promise<void>;
    abstract delete(id: string): Promise<void>;
}
