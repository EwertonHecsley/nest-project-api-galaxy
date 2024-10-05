import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SpaceShipDto {

    @IsString()
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'model is required' })
    model: string;

    @IsString()
    @IsNotEmpty({ message: 'manafacturer is required' })
    manufacturer: string;

    @IsNumber()
    @IsNotEmpty({ message: 'passengerCapacity is required' })
    passengerCapacity: number;
}