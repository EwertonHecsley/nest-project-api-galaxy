import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { AuthDto } from "src/domain/user/dto/auth.dto";
import { AuthUserUseCase } from "src/domain/user/use-case/auth.user";
import { Public } from "src/infra/auth/public";
import { UserPresenter } from "src/infra/presenters/user.presenter";

@Controller('login')
export class LoginController {

    constructor(private readonly authService: AuthUserUseCase) { }

    @Public()
    @Post()
    @HttpCode(200)
    async handler(@Body() loginBody: AuthDto, @Res() response: Response) {
        const result = await this.authService.execute(loginBody);

        if (result.isLeft()) {
            throw result.value;
        }

        const { user, token } = result.value;


        response.json(
            {
                user: UserPresenter.toHTTP(user),
                token
            }
        );
    }
}