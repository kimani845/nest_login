import { IsEmail, IsString, Matches, MinLength } from "class-validator";


export class SignUpDto{
    @IsString()
    name: string;
    
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(10)
    @Matches(/^(?=.*[0-9])/, { message: 'Password must contain at least one number' })
    password: string;

}