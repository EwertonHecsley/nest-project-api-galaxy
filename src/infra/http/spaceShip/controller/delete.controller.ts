import { Controller, Delete, HttpCode, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { DeleteSpaceShipUseCase } from "src/domain/spaceShips/use-case/delete.spaceShip";

@Controller('spaceShips')
export class DeleteSpaceShipController {

    constructor(private readonly spaceShipService: DeleteSpaceShipUseCase) { }

    @Delete(':id')
    @HttpCode(204)
    async handler(@Param('id') id: string, @Res() response: Response) {
        const result = await this.spaceShipService.execute({ id });

        if (result.isLeft()) {
            throw result.value;
        }

        return response.send();
    }
}