import { Body, Controller, HttpCode, Param, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { EditSpaceShipDto } from "src/domain/spaceShips/dto/edit.dto";
import { EditSpaceShipUseCase } from "src/domain/spaceShips/use-case/edit.spaceShip";

@Controller('spaceShips')
export class EditSpaceShipController {

    constructor(private readonly spaceShipService: EditSpaceShipUseCase) { }

    @Put(':id')
    @HttpCode(204)
    async handler(@Body() dataBody: EditSpaceShipDto, @Param('id') id: string, @Res() response: Response) {

        const result = await this.spaceShipService.execute({ id, ...dataBody });

        if (result.isLeft()) {
            throw result.value
        }

        return response.send();
    }
}