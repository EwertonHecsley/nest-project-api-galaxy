import { Controller, Get, HttpCode, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { FindSpaceShipUseCase } from "src/domain/spaceShips/use-case/find.spaceShip";
import { SpaceShipPresenter } from "src/infra/presenters/spaceShip.presenter";

@Controller('spaceShips')
export class FindSpaceShipController {

    constructor(private readonly spaceShipService: FindSpaceShipUseCase) { }

    @Get(':id')
    @HttpCode(200)
    async handler(@Param('id') id: string, @Res() response: Response) {
        const result = await this.spaceShipService.execute({ id });

        if (result.isLeft()) {
            throw result.value
        }
        return response.json(SpaceShipPresenter.toHTTP(result.value));
    }
}