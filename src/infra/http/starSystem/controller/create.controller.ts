import { Body, Controller, HttpCode, InternalServerErrorException, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { StarSystemDto } from "src/domain/starSystem/dto/starSystem.dto";
import { CreateStarSystemUseCase } from "src/domain/starSystem/use-case/create.starSystem";

@Controller('/star-system')
export class CreateStarSystemController {

    constructor(private readonly starSystemService: CreateStarSystemUseCase) { }

    @Post()
    @HttpCode(201)
    async handler(@Body() dataStarSystem: StarSystemDto, @Res() response: Response) {
        const result = await this.starSystemService.execute(dataStarSystem);

        if (result.isLeft()) throw new InternalServerErrorException();

        return response.json(result.value);
    }
}