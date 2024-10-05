import { Controller, Get, HttpCode, Res } from "@nestjs/common";
import { Response } from "express";
import { ListUserUseCase } from "src/domain/user/use-case/list.users";
import { UserPresenter } from "src/infra/presenters/user.presenter";

@Controller('user')
export class ListUserController {

    constructor(private readonly userService: ListUserUseCase) { }

    @Get()
    @HttpCode(200)
    async handler(@Res() response: Response) {
        const result = await this.userService.execute();

        if (result.isLeft()) {
            throw result.value;
        }

        return response.json(result.value.map(UserPresenter.toHTTP))
    }
}