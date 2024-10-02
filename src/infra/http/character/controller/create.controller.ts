import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CharacterDto } from "src/domain/character/dto/character.dto";
import { CreateCharacterUseCase } from "src/domain/character/use-case/create.character";
import { CharacterPresenter } from "src/infra/presenters/character.presenter";

@Controller('/characters')
export class CreateCharacterController {

    constructor(private readonly characterService: CreateCharacterUseCase) { }

    @Post()
    @HttpCode(201)
    async handler(@Body() data: CharacterDto, @Res() response: Response) {
        const result = await this.characterService.execute(data);

        if (result.isLeft()) {
            throw result.value;
        }

        return response.json(CharacterPresenter.toHTTP(result.value));
    }
}