import { Controller, Get, HttpCode, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { FindUserUseCase } from "src/domain/user/use-case/find.user";
import { UserPresenter } from "src/infra/presenters/user.presenter";

@Controller('user')
export class FindUserController {

    constructor(private readonly userService: FindUserUseCase) { }

    @Get(':id')
    @HttpCode(200)
    async handler(@Param('id') id: string, @Res() response: Response) {
        const result = await this.userService.execute({ id });

        if (result.isLeft()) {
            throw result.value;
        }

        return response.json(UserPresenter.toHTTP(result.value));
    }

}