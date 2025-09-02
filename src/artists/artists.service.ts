import { Injectable } from '@nestjs/common';
import { Artist } from './entities/artist.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Song } from 'src/songs/entities/song.entity';
import { Op } from 'sequelize';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist)
    private artistModel: typeof Artist
  ) { }

  async findAll() {
    return this.artistModel.findAll()
  }

  async findOneWithSongs(id: string, startDate: string = '2010-01-01', endDate: string = '2025-01-01') {
    return this.artistModel.findByPk(id, {
      include: [
        {
          model: Song,
          as: 'songs',
          order: [['title', 'ASC']],
          where: {
            release_date: {
              [Op.between]: [startDate, endDate]
            }
          },
          required: false
        }
      ],
      order: [['name', 'ASC']]
    })
  }


}
