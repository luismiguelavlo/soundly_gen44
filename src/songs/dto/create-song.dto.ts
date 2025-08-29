import { IsDateString, IsString, IsUrl } from "class-validator"

export class CreateSongDto {

  @IsString()
  title: string

  @IsString()
  album: string

  @IsUrl()
  audio_url: string

  @IsUrl()
  cover_url: string

  @IsString()
  duration: string

  @IsDateString()
  release_date: string
  
}
