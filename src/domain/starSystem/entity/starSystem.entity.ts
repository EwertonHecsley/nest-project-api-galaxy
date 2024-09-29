import Entity from "../../../core/generics/entity";
import Idendity from "../../../core/generics/identity";

type StarSystemType = {
    name: string;
    description: string;
}

export default class StarSystem extends Entity<StarSystemType> {

    static create(starSystemData: Partial<StarSystemType>, id?: Idendity) {
        return new StarSystem(
            {
                name: starSystemData.name,
                description: starSystemData.description
            },
            id
        );
    }

    get name(): string {
        return this.attributes.name;
    }

    get description(): string {
        return this.attributes.description;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set description(description: string) {
        this.attributes.description = description;
    }
}