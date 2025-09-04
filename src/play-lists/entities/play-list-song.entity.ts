import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { PlayList } from "./play-list.entity";
import { Song } from "src/songs/entities/song.entity";


@Table({
  tableName: 'play_list_song',
  timestamps: true
})
export class PlaylistSong extends Model {
  @PrimaryKey
  @ForeignKey(() => PlayList)
  @Column({
    field: 'playlist_id',
    type: DataType.UUID
  })
  playlistId: string

  @PrimaryKey
  @ForeignKey(() => Song)
  @Column({
    field: 'song_id',
    type: DataType.UUID
  })
  songId: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  position: number
}