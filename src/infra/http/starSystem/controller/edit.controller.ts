import { BadRequestException, Body, Controller, HttpCode, NotFoundException, Param, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { EditStarSystemDto } from "src/domain/starSystem/dto/edit.starSystem.dto";
import { EditStarSystemUseCase } from "src/domain/starSystem/use-case/edit.starSystem";

@Controller('/star-systems')
export class EditStarSystemController {

    constructor(private readonly starSystemService: EditStarSystemUseCase) { }

    @Put(':id')
    @HttpCode(204)
    async handler(@Body() starSystemData: EditStarSystemDto, @Param('id') id: string, @Res() response: Response) {
        const result = await this.starSystemService.execute({ id, ...starSystemData });

        if (result.isLeft()) {
            const error = result.value;

            if (error instanceof BadRequestException) {
                throw new BadRequestException(error.message);
            } else if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            } else {
                throw error;
            }
        }

        return response.send();
    }
}