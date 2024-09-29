import { Controller, Get, HttpCode, InternalServerErrorException, Res } from "@nestjs/common";
import { Response } from "express";
import { ListStarSystemUseCase } from "src/domain/starSystem/use-case/list.starSystem";
import { StarSystemPresenter } from "src/infra/presenters/starSystem.presenter";

@Controller('/star-system')
export class ListStarSystemController {

    constructor(private readonly starSystemService: ListStarSystemUseCase) { }

    @Get()
    @HttpCode(200)
    async handler(@Res() response: Response) {
        const planetList = await this.starSystemService.execute();

        if (planetList.isLeft()) {
            throw new InternalServerErrorException();
        }

        const starSystemToHTTP = planetList.value.map(starSystem => StarSystemPresenter.toHTTP(starSystem));

        return response.json(starSystemToHTTP);
    }
}