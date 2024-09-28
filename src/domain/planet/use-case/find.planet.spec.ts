import { InMemoryPlanetRepository } from "../../../../tests/repositories/inMemory.Planet.repository";
import { Planet } from "../entity/planet.entity";
import { FindPlanetUseCase } from "./find.planet";

let planetRepository: InMemoryPlanetRepository;
let useCase: FindPlanetUseCase;

describe('Teste UseCase Planet', () => {
    beforeEach(() => {
        planetRepository = new InMemoryPlanetRepository();
        useCase = new FindPlanetUseCase(planetRepository);
    })

    test('Deve retornar um Planeta', async () => {
        const planet = Planet.create(
            {
                name: 'Mars',
                climate: 'Tropical',
                terrain: 'Desert',
                population: 67330300
            }
        );

        await planetRepository.itens.push(planet);

        const response = await useCase.execute({ id: planet.id.valueId });

        expect(response.isRigth()).toBeTruthy();
    })

    test('Ao passar um ID inválido, deve retornar nulo', async () => {
        const response = await useCase.execute({ id: '100' });

        expect(response.isLeft()).toBeTruthy();
    })
})