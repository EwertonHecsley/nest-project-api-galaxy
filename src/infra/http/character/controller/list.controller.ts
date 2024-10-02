import { Controller, Get, HttpCode, Res } from "@nestjs/common";
import { Response } from "express";
import { ListCharactersUseCase } from "src/domain/character/use-case/list.character";
import { CharacterPresenter } from "src/infra/presenters/character.presenter";

@Controller('/characters')
export class ListCharacterController {

    constructor(private readonly characterService: ListCharactersUseCase) { }

    @Get()
    @HttpCode(200)
    async handler(@Res() response: Response) {
        const list = await this.characterService.execute();

        if (list.isLeft()) {
            throw list.value;
        }

        const result = list.value.map(character => CharacterPresenter.toHTTP(character));

        return response.json(result);
    }
};