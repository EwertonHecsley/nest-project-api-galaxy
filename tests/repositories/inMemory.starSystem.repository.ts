import StarSystem from "src/domain/starSystem/entity/starSystem.entity";
import { StarSystemRepository } from "src/domain/starSystem/repository/starSystem.repository";

export class InMemoryStarSystemRepository implements StarSystemRepository {
    itens: StarSystem[] = [];

    async create(starSystem: StarSystem): Promise<StarSystem> {
        await this.itens.push(starSystem);

        return starSystem;
    }

    async findMany(id: string): Promise<StarSystem> {
        const data = await this.itens.find((element) => element.id.valueId == id);

        return data;
    }

    async list(): Promise<StarSystem[]> {
        return this.itens;
    }

    async save(starSystem: StarSystem): Promise<void> {
        const itensExist = await this.itens.findIndex(element => element.id == starSystem.id);

        this.itens[itensExist] = starSystem;
    }
}