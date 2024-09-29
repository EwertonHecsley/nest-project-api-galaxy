import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Planet } from "src/domain/planet/entity/planet.entity";

export class StarSystemDto {

    @IsNotEmpty({ message: 'name is required.' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'description is required.' })
    @IsString()
    description: string;

    @IsOptional()
    @IsNotEmpty({ message: 'planets is required.' })
    planets: Planet[];
}