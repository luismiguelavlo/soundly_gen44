import { Controller, Get, Param, Query } from '@nestjs/common';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) { }

  @Get()
  findAll() {
    return this.artistsService.findAll()
  }

  @Get(':id')
  findOneWithSongs(
    @Param('id') id: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.artistsService.findOneWithSongs(id, startDate, endDate)
  }
}
