import { Body, Controller, HttpCode, Param, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { EditUserDto } from "src/domain/user/dto/edit.dto";
import { EditUserUseCase } from "src/domain/user/use-case/edit.user";

@Controller('user')
export class EditUserController {

    constructor(private readonly userService: EditUserUseCase) { }

    @Put(':id')
    @HttpCode(204)
    async handler(@Body() data: EditUserDto, @Param('id') id: string, @Res() response: Response) {
        const result = await this.userService.execute({ id, ...data });

        if (result.isLeft()) {
            throw result.value;
        }

        return response.send()
    }
}