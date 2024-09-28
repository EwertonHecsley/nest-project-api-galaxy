import { InMemoryPlanetRepository } from "../../../../tests/repositories/inMemory.Planet.repository";
import { CreatePlanetUseCase } from "./create.planet";
import { Planet } from "../entity/planet.entity";

let planetRepository: InMemoryPlanetRepository;
let useCase: CreatePlanetUseCase;

describe('Teste para useCase Planet', () => {
    beforeEach(() => {
        planetRepository = new InMemoryPlanetRepository();
        useCase = new CreatePlanetUseCase(planetRepository);
    });

    test('criar um novo planeta', async () => {
        const request = {
            name: 'Mars',
            climate: 'Tropical',
            terrain: 'Desert',
            population: 67330300
        }

        const planet = await useCase.execute(request);

        if (planet.isRigth()) {
            expect(planetRepository.itens[0].id.valueId).toEqual(planet.value.id.valueId);
            expect(planetRepository.itens[0].name).toEqual(planet.value.name);
            expect(planetRepository.itens[0].climate).toEqual(planet.value.climate);
            expect(planetRepository.itens[0].terrain).toEqual(planet.value.terrain);
            expect(planetRepository.itens[0].population).toEqual(planet.value.population);
        }

        expect(planet.isLeft()).toBeFalsy();
        expect(planet.value).toBeInstanceOf(Planet);
    })
})