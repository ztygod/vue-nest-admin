import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LoginUserDto {
    @IsString({ message: 'user_id要求为一个string' })
    @IsNotEmpty({ message: 'user_id不为空' })
    user_id: string;

    @IsString({ message: 'password要求为一个string' })
    @IsNotEmpty({ message: 'user_id不为空' })
    password: string;
}