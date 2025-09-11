import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayListsService } from './play-lists.service';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { UpdatePlayListDto } from './dto/update-play-list.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('play-lists')
export class PlayListsController {
  constructor(private readonly playListsService: PlayListsService) { }

  @Post()
  @Auth()
  create(@Body() createPlayListDto: CreatePlayListDto) {
    return this.playListsService.create(createPlayListDto);
  }

  @Get()
  @Auth()
  findAll() {
    return this.playListsService.findAll();
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id') id: string) {
    return this.playListsService.findOne(id);
  }

  //quiero otro endpoint para agregar una cancion a una playlist
}
