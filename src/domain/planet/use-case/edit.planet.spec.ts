import { InMemoryPlanetRepository } from "../../../../tests/repositories/inMemory.Planet.repository";
import { Planet } from "../entity/planet.entity";
import { EditPlanetUseCase } from "./edit.planet";

describe('Testes UseCase Planet', () => {
    let planetRepository: InMemoryPlanetRepository;
    let useCase: EditPlanetUseCase;

    beforeEach(() => {
        planetRepository = new InMemoryPlanetRepository();
        useCase = new EditPlanetUseCase(planetRepository);
    })

    test('Deve editar um Planeta', async () => {
        const planet = Planet.create(
            {
                name: 'Mars',
                climate: 'Tropical',
                terrain: 'Desert',
                population: 6371000
            }
        );

        await planetRepository.itens.push(planet);

        await useCase.execute(
            {
                id: planet.id.valueId,
                name: 'New Mars',
                population: 100
            }
        )

        expect(planetRepository.itens[0].name).toEqual('New Mars');
        expect(planetRepository.itens[0].population).toEqual(100);
    })
})