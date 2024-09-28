import { InMemoryPlanetRepository } from "../../../../tests/repositories/inMemory.Planet.repository";
import { DeletePlanetUseCase } from "./delete.planet";
import { Planet } from "../entity/planet.entity";

describe('Teste useCase Planet', () => {
    let planetRepository: InMemoryPlanetRepository;
    let useCase: DeletePlanetUseCase;

    beforeEach(() => {
        planetRepository = new InMemoryPlanetRepository();
        useCase = new DeletePlanetUseCase(planetRepository);
    })

    test('Deve deletar um planeta', async () => {
        const planet = Planet.create(
            {
                name: 'Mars',
                climate: 'Tropical',
                terrain: 'Desert',
                population: 67330300
            }
        );

        await planetRepository.itens.push(planet);
        await useCase.execute({ id: planet.id.valueId });
        const planetAfterDelete = await planetRepository.findMany(planet.id.valueId);

        expect(planetAfterDelete).toBeUndefined();
    })
})