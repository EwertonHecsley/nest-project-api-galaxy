import { BadRequestException, Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { PlanetDto } from "src/domain/planet/dto/planet.dto";
import { CreatePlanetUseCase } from "src/domain/planet/use-case/create.planet";
import { PlanetPresenter } from "src/infra/presenters/planet.presenter";

@Controller('planet')
export class CreatePlanetController {

    constructor(private readonly planetService: CreatePlanetUseCase) { }

    @Post()
    @HttpCode(201)
    async handler(@Body() bodyPlanet: PlanetDto, @Res() response: Response) {
        const result = await this.planetService.execute({ ...bodyPlanet });

        if (result.isLeft()) throw new BadRequestException();

        return response.json(PlanetPresenter.toHTTP(result.value));
    }
}