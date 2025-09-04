import { BelongsToMany, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { PlaylistSong } from "./play-list-song.entity";
import { Song } from "src/songs/entities/song.entity";

@Table({
  tableName: 'play_list',
  timestamps: true
})
export class PlayList extends Model {

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare id: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  description: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: 'image_url'
  })
  imageUrl: string;

  @BelongsToMany(() => Song, () => PlaylistSong)
  songs: Song[]
}
