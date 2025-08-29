import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Song } from './entities/song.entity';

@Injectable()
export class SongsService {

  constructor(
    private readonly sequelize: Sequelize,
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
      console.log(error)
    }
  }

  async findAll() {
    return this.songModel.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
