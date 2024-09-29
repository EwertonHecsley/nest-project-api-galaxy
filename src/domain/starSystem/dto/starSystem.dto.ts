import { IsNotEmpty, IsString } from "class-validator";

export class StarSystemDto {

    @IsNotEmpty({ message: 'name is required.' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'description is required.' })
    @IsString()
    description: string;
}