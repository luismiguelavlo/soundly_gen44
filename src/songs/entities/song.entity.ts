import { allow } from "joi";
import { BelongsTo, BelongsToMany, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Artist } from "src/artists/entities/artist.entity";
import { Genre } from "src/genres/entities/genre.entity";
import { PlaylistSong } from "src/play-lists/entities/play-list-song.entity";
import { PlayList } from "src/play-lists/entities/play-list.entity";

export enum SongStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE'
}

@Table({
  tableName: 'song',
  timestamps: true
})
export class Song extends Model {

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
  title: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  album: string

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  audio_url: string

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  cover_url: string

  @Column({
    type: DataType.STRING(5),
    allowNull: false
  })
  duration: string

  @Column({
    type: DataType.ENUM(...Object.values(SongStatus)),
    allowNull: false,
    defaultValue: SongStatus.AVAILABLE
  })
  status: string

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  release_date: string

  @ForeignKey(() => Artist)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    field: 'artist_id'
  })
  artistId: string;

  @ForeignKey(() => Genre)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    field: 'genre_id'
  })
  genreId: string;

  @BelongsTo(() => Artist, 'artist_id')
  artist: Artist

  @BelongsTo(() => Genre, 'genre_id')
  genre: Genre


  @BelongsToMany(() => PlayList, () => PlaylistSong)
  playlists: PlayList[]
}
