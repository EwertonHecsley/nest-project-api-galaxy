import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserDto {

    @IsString()
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'password is required' })
    @MinLength(4, { message: 'password is min 4 characteres' })
    password: string;

    @IsString()
    @IsNotEmpty({ message: 'email is required' })
    @IsEmail({}, { message: 'email invalid' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'category is required' })
    category: string;
}