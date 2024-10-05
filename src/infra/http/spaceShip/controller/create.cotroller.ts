import { Body, Controller, HttpCode, InternalServerErrorException, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { SpaceShipDto } from "src/domain/spaceShips/dto/spaceShip.dto";
import { CreateSpaceShipUseCase } from "src/domain/spaceShips/use-case/create.spaceSchip";
import { SpaceShipPresenter } from "src/infra/presenters/spaceShip.presenter";

@Controller('spaceShips')
export class CreateSpaceShipController {

    constructor(private readonly spaceShipsService: CreateSpaceShipUseCase) { }

    @Post()
    @HttpCode(201)
    async handler(@Body() dataSpaceShip: SpaceShipDto, @Res() response: Response) {

        const result = await this.spaceShipsService.execute(dataSpaceShip);

        if (result.isLeft()) {
            throw new InternalServerErrorException();
        }

        return response.json(SpaceShipPresenter.toHTTP(result.value))
    }
}