import { IsNotEmpty, IsString } from "class-validator";

export class CharacterDto {

    @IsString()
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'race is required' })
    race: string;

    @IsString()
    @IsNotEmpty({ message: 'affiliation is required' })
    affiliation: string;

    @IsString()
    @IsNotEmpty({ message: 'homePlanetId is required' })
    homePlanetId: string;
}