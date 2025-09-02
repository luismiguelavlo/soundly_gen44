import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Artist } from './entities/artist.entity';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService],
  imports: [
    SequelizeModule.forFeature([Artist])
  ]
})
export class ArtistsModule { }
