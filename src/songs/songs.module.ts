import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Song } from './entities/song.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SongsController],
  providers: [SongsService],
  imports: [
    SequelizeModule.forFeature([Song]),
    AuthModule
  ]
})
export class SongsModule { }
