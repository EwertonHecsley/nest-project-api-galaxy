import { Controller, Get, HttpCode, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { FindCharacterUseCase } from "src/domain/character/use-case/find.character";
import { CharacterPresenter } from "src/infra/presenters/character.presenter";

@Controller('/characters')
export class FindCharacterController {

    constructor(private readonly characterService: FindCharacterUseCase) { }

    @Get(':id')
    @HttpCode(200)
    async handler(@Param('id') id: string, @Res() response: Response) {
        const character = await this.characterService.execute({ id });

        if (character.isLeft()) {
            throw character.value;
        }

        return response.json(CharacterPresenter.toHTTP(character.value));
    }
}