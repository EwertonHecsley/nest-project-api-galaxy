import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { UserDto } from "src/domain/user/dto/user.dto";
import { CreateUserUseCase } from "src/domain/user/use-case/create.user";
import { UserPresenter } from "src/infra/presenters/user.presenter";
import { Public } from "src/infra/auth/public";

@Controller('user')
export class CreateUserController {

    constructor(
        private readonly userService: CreateUserUseCase
    ) { }

    @Public()
    @Post()
    @HttpCode(201)
    async handler(@Body() dataBody: UserDto, @Res() response: Response) {

        const result = await this.userService.execute(dataBody);

        if (result.isLeft()) {
            throw result.value;
        }

        return response.json(UserPresenter.toHTTP(result.value));
    }
}