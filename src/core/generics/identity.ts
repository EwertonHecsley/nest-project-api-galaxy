import { randomUUID } from "crypto";

export default class Idendity {
    private value: string;

    constructor(value?: string) {
        this.value = value ?? randomUUID().toString();;
    }

    get valueId(): string {
        return this.value;
    }
}