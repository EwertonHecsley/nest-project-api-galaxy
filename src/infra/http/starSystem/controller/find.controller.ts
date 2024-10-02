import { Controller, Get, HttpCode, NotFoundException, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { FindStarSystemUseCase } from "src/domain/starSystem/use-case/find.starSystem";
import { StarSystemPresenter } from "src/infra/presenters/starSystem.presenter";

@Controller('/star-systems')
export class FindStarSystemController {

    constructor(private readonly starSystemService: FindStarSystemUseCase) { }

    @Get(':id')
    @HttpCode(200)
    async handler(@Param('id') id: string, @Res() response: Response) {
        const starSystem = await this.starSystemService.execute({ id });

        if (starSystem.isLeft()) {
            throw new NotFoundException(starSystem.value.message);
        }

        return response.json(StarSystemPresenter.toHTTP(starSystem.value));
    }
}