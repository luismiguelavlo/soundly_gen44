import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) { }

  @Auth()
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  @Auth()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(id);
  }

  @Get('title/:title')
  @Auth()
  findSongByTitle(
    @Param('title') title: string,
  ) {
    return this.songsService.findSongByTitle(title)
  }

  @Patch(':id')
  @Auth()
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.update(id, updateSongDto);
  }

  @Delete(':id')
  @Auth()
  remove(@Param('id') id: string) {
    return this.songsService.remove(id);
  }
}
