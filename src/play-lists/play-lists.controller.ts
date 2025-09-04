import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayListsService } from './play-lists.service';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { UpdatePlayListDto } from './dto/update-play-list.dto';

@Controller('play-lists')
export class PlayListsController {
  constructor(private readonly playListsService: PlayListsService) { }

  @Post()
  create(@Body() createPlayListDto: CreatePlayListDto) {
    return this.playListsService.create(createPlayListDto);
  }

  @Get()
  findAll() {
    return this.playListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playListsService.findOne(id);
  }

  //quiero otro endpoint para agregar una cancion a una playlist
}
