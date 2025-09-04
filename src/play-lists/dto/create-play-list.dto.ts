import { IsString, IsUrl, MinLength } from "class-validator"


export class CreatePlayListDto {
  @IsString()
  @MinLength(3)
  name: string


  @MinLength(10)
  @IsString()
  description: string

  @IsString()
  @IsUrl()
  imageUrl: string
}
