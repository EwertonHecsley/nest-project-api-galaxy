import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditStarSystemDto {

    @IsOptional()
    @IsNotEmpty({ message: 'name is required.' })
    @IsString()
    name: string;

    @IsOptional()
    @IsNotEmpty({ message: 'description is required.' })
    @IsString()
    description: string;
}
