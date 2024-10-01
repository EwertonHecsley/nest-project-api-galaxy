import { Controller, Get, HttpCode, InternalServerErrorException, Res } from "@nestjs/common";
import { Response } from "express";
import { ListPlanetsUseCase } from "src/domain/planet/use-case/list.planet";
import { PlanetPresenter } from "src/infra/presenters/planet.presenter";

@Controller('/planets')
export class ListPlanetController {

    constructor(private readonly planetService: ListPlanetsUseCase) { }

    @Get()
    @HttpCode(200)
    async handler(@Res() response: Response) {
        const planetList = await this.planetService.execute();

        if (planetList.isLeft()) {
            throw new InternalServerErrorException();
        }

        const result = planetList.value.map(planet => PlanetPresenter.toHTTP(planet));

        return response.json(result);
    }
}