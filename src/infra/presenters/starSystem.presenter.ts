import StarSystem from "src/domain/starSystem/entity/starSystem.entity";

export class StarSystemPresenter {

    static toHTTP(starSystem: StarSystem) {
        return {
            id: starSystem.id.valueId,
            name: starSystem.name,
            description: starSystem.description
        }
    }
}