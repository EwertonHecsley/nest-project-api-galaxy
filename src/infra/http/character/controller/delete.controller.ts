import { Controller, Delete, HttpCode, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { DeleteCharacterUseCase } from "src/domain/character/use-case/delete.character";

@Controller('characters')
export class DeleteCharacterCotroller {

    constructor(private readonly charcterService: DeleteCharacterUseCase) { }

    @Delete(':id')
    @HttpCode(204)
    async handler(@Param('id') id: string, @Res() response: Response) {
        const result = await this.charcterService.execute({ id });

        if (result.isLeft()) {
            throw result.value
        }

        return response.send();
    }
}