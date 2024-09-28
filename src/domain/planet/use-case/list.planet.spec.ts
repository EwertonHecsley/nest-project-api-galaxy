import { InMemoryPlanetRepository } from "../../../../tests/repositories/inMemory.Planet.repository";
import { ListPlanetsUseCase } from "./list.planet";

describe('Teste UseCase Planet', () => {
    let planetRepository: InMemoryPlanetRepository;
    let useCase: ListPlanetsUseCase;

    beforeEach(() => {
        planetRepository = new InMemoryPlanetRepository();
        useCase = new ListPlanetsUseCase(planetRepository);
    })

    test('Deve retornar uma lista de planetas', async () => {
        const planetList = await useCase.execute();
        expect(planetList.isRigth()).toBeTruthy();
    })
})