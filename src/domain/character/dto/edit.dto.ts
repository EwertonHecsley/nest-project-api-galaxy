import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditCharacterDto {

    @IsString()
    @IsNotEmpty({ message: 'name is required' })
    @IsOptional()
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'race is required' })
    @IsOptional()
    race: string;

    @IsString()
    @IsNotEmpty({ message: 'affiliation is required' })
    @IsOptional()
    affiliation: string;

    @IsString()
    @IsNotEmpty({ message: 'homePlanetId is required' })
    @IsOptional()
    homePlanetId: string;
}