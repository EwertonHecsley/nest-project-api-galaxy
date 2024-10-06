import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {

    @IsString()
    @IsNotEmpty({ message: 'email is required' })
    @IsEmail({}, { message: 'email is invalid' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'password is required' })
    password: string;
}