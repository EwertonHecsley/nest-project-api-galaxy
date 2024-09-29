import { InMemoryPlanetRepository } from "../../../../tests/repositories/inMemory.Planet.repository";
import { CreatePlanetUseCase } from "./create.planet";
import { Planet } from "../entity/planet.entity";
import { InMemoryStarSystemRepository } from "../../../../tests/repositories/inMemory.starSystem.repository";
import StarSystem from "../../starSystem/entity/starSystem.entity";

let planetRepository: InMemoryPlanetRepository;
let starSystemRepository: InMemoryStarSystemRepository;
let useCase: CreatePlanetUseCase;

describe('Teste para useCase Planet', () => {
    beforeEach(() => {
        starSystemRepository = new InMemoryStarSystemRepository()
        planetRepository = new InMemoryPlanetRepository();
        useCase = new CreatePlanetUseCase(planetRepository, starSystemRepository);
    });

    test('criar um novo planeta', async () => {
        const starSystemExample = StarSystem.create(
            {
                name: 'Sol',
                description: 'Sistema solar'
            }
        )

        const request = {
            name: 'Mars',
            climate: 'Tropical',
            terrain: 'Desert',
            population: 67330300,
            starSystemId: starSystemExample.id.valueId
        }

        const starSystemExist = starSystemRepository.findMany(request.starSystemId);

        if (starSystemExist) {
            const planet = Planet.create(request);

            const result = await useCase.execute(
                {
                    name: planet.name,
                    climate: planet.climate,
                    terrain: planet.terrain,
                    population: planet.population,
                    starSystemId: request.starSystemId
                }
            );

            if (result.isRigth()) {
                expect(planetRepository.itens[0].id.valueId).toEqual(result.value.id.valueId);
                expect(planetRepository.itens[0].name).toEqual(result.value.name);
                expect(planetRepository.itens[0].climate).toEqual(result.value.climate);
                expect(planetRepository.itens[0].terrain).toEqual(result.value.terrain);
                expect(planetRepository.itens[0].population).toEqual(result.value.population);
            }
        }
    })
})