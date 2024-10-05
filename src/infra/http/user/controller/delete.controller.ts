import { Controller, Delete, HttpCode, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { DeleteUserUseCase } from "src/domain/user/use-case/delete.user";

@Controller('user')
export class DeleteUserController {

    constructor(private readonly userService: DeleteUserUseCase) { }

    @Delete(':id')
    @HttpCode(204)
    async handler(@Param('id') id: string, @Res() response: Response) {
        const result = await this.userService.execute({ id });

        if (result.isLeft()) {
            throw result.value;
        }

        response.send();
    }
}