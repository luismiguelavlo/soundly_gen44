import { IsEmail, IsString, Matches, MinLength } from "class-validator"


export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string

  @IsEmail()
  email: string

  @MinLength(8, { message: 'The password must be a least 8 characters' })
  @Matches(/(?=.*[a-z])/, {
    message: 'The password must be a least one lowercase letter',
  })
  @Matches(/(?=.*[A-Z])/, {
    message: 'The password must be a least one uppercase letter',
  })
  @Matches(/(?=.*\d)/, {
    message: 'La contraseña debe tener al menos un número',
  })
  @Matches(/(?=.*[@$!%*?&])/, {
    message: 'La contraseña debe tener al menos un carácter especial (@$!%*?&)',
  })
  password: string
}