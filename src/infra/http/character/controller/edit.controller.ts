import { Body, Controller, HttpCode, NotFoundException, Param, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { EditCharacterDto } from "src/domain/character/dto/edit.dto";
import { EditCharacterUseCase } from "src/domain/character/use-case/edit.character";

@Controller('/characters')
export class EditCharacterController {

    constructor(private readonly characterService: EditCharacterUseCase) { }

    @Put(':id')
    @HttpCode(204)
    async handler(@Body() data: EditCharacterDto, @Param('id') id: string, @Res() response: Response) {

        const result = await this.characterService.execute({ id, ...data });

        if (result.isLeft()) {
            throw new NotFoundException(result.value.message);
        }

        return response.send();
    }

}