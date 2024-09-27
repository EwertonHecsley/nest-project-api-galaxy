import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PlanetDto {

    @IsNotEmpty({ message: 'name is required.' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'climate is required.' })
    @IsString()
    climate: string;

    @IsNotEmpty({ message: 'terrain is required.' })
    @IsString()
    terrain: string;

    @IsNotEmpty({ message: 'population is required.' })
    @IsNumber()
    population: number;
}