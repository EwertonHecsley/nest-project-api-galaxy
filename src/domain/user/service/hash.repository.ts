export abstract class HashRepository {
    abstract hash(key: string): Promise<string>;
    abstract compare(key: string, value: string): Promise<boolean>;
}