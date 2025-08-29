import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Song } from './entities/song.entity';

@Module({
  controllers: [SongsController],
  providers: [SongsService],
  imports: [
    SequelizeModule.forFeature([Song])
  ]
})
export class SongsModule {}
