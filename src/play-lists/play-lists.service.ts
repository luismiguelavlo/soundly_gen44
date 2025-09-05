import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayListDto } from './dto/create-play-list.dto';
import { UpdatePlayListDto } from './dto/update-play-list.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PlayList } from './entities/play-list.entity';
import { PlaylistSong } from './entities/play-list-song.entity';
import { Song } from 'src/songs/entities/song.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Genre } from 'src/genres/entities/genre.entity';

@Injectable()
export class PlayListsService {

  constructor(
    @InjectModel(PlayList)
    private readonly playListModel: typeof PlayList,
    @InjectModel(PlaylistSong)
    private readonly playlistSongModel: typeof PlaylistSong
  ) { }

  async create(createPlayListDto: CreatePlayListDto) {
    return this.playListModel.create({
      name: createPlayListDto.name,
      description: createPlayListDto.description,
      imageUrl: createPlayListDto.imageUrl
    });
  }

  async findAll() {
    return this.playListModel.findAll();
  }

  async findOne(id: string) {
    const playList = await this.playListModel.findByPk(id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      include: [
        {
          model: Song,
          attributes: ['id', 'title', 'album', 'audio_url', 'cover_url', 'duration'],
          through: { attributes: ['position'] },
          include: [
            {
              model: Artist,
              attributes: ['id', 'name', 'image_url'],
            },
            {
              model: Genre,
              attributes: ['id', 'name'],
            }
          ]
        }
      ],
      order: [[
        { model: Song, as: 'songs' },
        PlaylistSong,
        'position',
        'ASC'
      ]]
    })

    if (!playList) {
      throw new NotFoundException('PlayList not found');
    }

    return playList;
  }
}
