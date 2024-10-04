import { Controller, Get, HttpCode, InternalServerErrorException, Res } from "@nestjs/common";
import { Response } from "express";
import { ListSpaceShipUseCase } from "src/domain/spaceShips/use-case/list.spaceShip";
import { SpaceShipPresenter } from "src/infra/presenters/spaceShip.presenter";

@Controller('spaceShips')
export class ListSpaceShipController {

    constructor(private readonly spaceShipService: ListSpaceShipUseCase) { }

    @Get()
    @HttpCode(200)
    async handler(@Res() response: Response) {
        const result = await this.spaceShipService.execute();

        if (result.isLeft()) {
            throw new InternalServerErrorException();
        }

        return response.json(result.value.map(list => SpaceShipPresenter.toHTTP(list)))
    }
}