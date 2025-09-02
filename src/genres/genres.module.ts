import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genre } from './entities/genre.entity';

@Module({
  controllers: [GenresController],
  providers: [GenresService],
  imports: [
    SequelizeModule.forFeature([Genre])
  ]
})
export class GenresModule { }
