import { Module } from '@nestjs/common';
import { PlayListsService } from './play-lists.service';
import { PlayListsController } from './play-lists.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlayList } from './entities/play-list.entity';
import { PlaylistSong } from './entities/play-list-song.entity';

@Module({
  controllers: [PlayListsController],
  providers: [PlayListsService],
  imports: [
    SequelizeModule.forFeature([PlaylistSong, PlayList])
  ]
})
export class PlayListsModule { }
