import { Body, Controller, HttpCode, NotFoundException, Param, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { EditPlanetDto } from "src/domain/planet/dto/edit.planet.dto";
import { EditPlanetUseCase } from "src/domain/planet/use-case/edit.planet";

@Controller('/planet')
export class EditPlanetController {

    constructor(private readonly planetService: EditPlanetUseCase) { }

    @Put(':id')
    @HttpCode(204)
    async handler(@Body() planetData: EditPlanetDto, @Param('id') id: string, @Res() response: Response) {
        const result = await this.planetService.execute({ id, ...planetData });

        if (result.isLeft()) throw new NotFoundException();

        return response.json();
    }
}