import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class EditPlanetDto {

    @IsOptional()
    @IsNotEmpty({ message: 'name is required.' })
    @IsString()
    name: string;

    @IsOptional()
    @IsNotEmpty({ message: 'climate is required.' })
    @IsString()
    climate: string;

    @IsOptional()
    @IsNotEmpty({ message: 'terrain is required.' })
    @IsString()
    terrain: string;

    @IsOptional()
    @IsNotEmpty({ message: 'population is required.' })
    @IsNumber()
    population: number;
}
