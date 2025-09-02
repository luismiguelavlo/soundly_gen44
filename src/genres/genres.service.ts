import { Injectable, NotFoundException } from '@nestjs/common';
import { Genre } from './entities/genre.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Song } from 'src/songs/entities/song.entity';

@Injectable()
export class GenresService {

  constructor(
    @InjectModel(Genre)
    private readonly genreModel: typeof Genre
  ) { }

  async findAll() {
    return await this.genreModel.findAll()
  }

  async findOneWithSongs(id: string) {
    const info = await this.genreModel.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Song,
          as: 'songs',
          order: [['title', 'ASC']]
        },
      ]
    })

    if (!info) {
      throw new NotFoundException('genre not found')
    }

    return info
  }
}
