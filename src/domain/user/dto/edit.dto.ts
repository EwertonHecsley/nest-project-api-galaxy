import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class EditUserDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'password is required' })
    @MinLength(4, { message: 'password is min 4 characteres' })
    password: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'email is required' })
    @IsEmail({}, { message: 'email invalid' })
    email: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'category is required' })
    category: string;
}