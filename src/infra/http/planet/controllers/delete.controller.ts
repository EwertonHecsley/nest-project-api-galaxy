import { Controller, Delete, HttpCode, NotFoundException, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { DeletePlanetUseCase } from "src/domain/planet/use-case/delete.planet";

@Controller('/planet')
export class DeletePlanetController {

    constructor(private readonly planetService: DeletePlanetUseCase) { }

    @Delete(':id')
    @HttpCode(204)
    async handler(@Param('id') id: string, @Res() response: Response) {
        const result = await this.planetService.execute({ id });

        if (result.isLeft()) {
            throw new NotFoundException(result.value.message);
        }

        return response.send();
    }
}