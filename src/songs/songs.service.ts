import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Song, SongStatus } from './entities/song.entity';
import { Op } from 'sequelize';

@Injectable()
export class SongsService {

  constructor(
    @InjectModel(Song)
    private songModel: typeof Song
  ){}

  async create(createSongDto: CreateSongDto) {
    try {
      return await this.songModel.create({
        title: createSongDto.title,
        album: createSongDto.album,
        audio_url: createSongDto.audio_url,
        cover_url: createSongDto.cover_url,
        duration: createSongDto.duration,
        release_date: createSongDto.release_date
      })
    } catch (error) {
      throw new InternalServerErrorException('Something went very wrong 🧨')
    }
  }

  async findAll() {
    return this.songModel.findAll({
      where: {
        status: SongStatus.AVAILABLE
      }
    })
  }

  async findOne(id: string) {
    const song = await this.songModel.findOne({
      where: {
        status: SongStatus.AVAILABLE,
        id,
      }
    })

    if(!song){
      throw new NotFoundException(`song with id: ${id} not found!`)
    }

    return song
  }

  async findSongByTitle(title: string){
    return await this.songModel.findAll({
      where: {
        title: {
          [Op.iLike]: `%${title}%`
        },
        status: SongStatus.AVAILABLE
      }
    })
  }

  async update(id: string, updateSongDto: UpdateSongDto) {
    const song = await this.findOne(id)
    try {
      return song.update(updateSongDto)
    } catch (error) {
      throw new InternalServerErrorException('Something went very wrong 🧨')
    }
  }

  async remove(id: string) {
    const song = await this.findOne(id)
    try {
      return song.update({
        status: SongStatus.UNAVAILABLE
      })
    } catch (error) {
      throw new InternalServerErrorException('Something went very wrong 🧨')
    }
  }
}
