import { randomInt } from "crypto";

export default class Idendity {
    private value: number;

    constructor(value?: number) {
        this.value = value ?? randomInt(3);
    }

    get valueId(): number {
        return this.value;
    }
}