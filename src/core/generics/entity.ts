import Idendity from "./identity";

export default class Entity<T> {
    private entityId: Idendity;
    protected attributes: T;

    protected constructor(attributes: T, id?: Idendity) {
        this.entityId = id ?? new Idendity();
        this.attributes = attributes;
    }

    get id(): Idendity {
        return this.entityId;
    }
}