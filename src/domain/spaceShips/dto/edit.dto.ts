import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class EditSpaceShipDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'model is required' })
    model: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'manafacturer is required' })
    manufacturer: string;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty({ message: 'passengerCapacity is required' })
    passengerCapacity: number;
}