import { IsEmail, IsString, MinLength } from "class-validator"


export class LoginUserDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(8, { message: 'The password must be a least 8 characters' })
  password: string
}