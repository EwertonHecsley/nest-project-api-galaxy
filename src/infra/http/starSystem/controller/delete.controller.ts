import { Controller, Delete, HttpCode, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { DeleteStarSystemUseCase } from "src/domain/starSystem/use-case/delete.starSystem";

@Controller('star-systems')
export class DeleteStarSystemController {

    constructor(private readonly starSystemService: DeleteStarSystemUseCase) { }

    @Delete(':id')
    @HttpCode(204)
    async handler(@Param('id') id: string, @Res() response: Response) {

        const result = await this.starSystemService.execute({ id });

        if (result.isLeft()) {
            throw result.value
        }

        return response.send();
    }
}