import { Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Song } from "src/songs/entities/song.entity";

@Table({
  tableName: 'artist',
  timestamps: true
})
export class Artist extends Model {
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
    allowNull: true
  })
  bio: string;

  @Column({
    field: 'image_url',
    type: DataType.STRING(100),
    allowNull: false
  })
  imageUrl: string;

  @HasMany(() => Song, 'artist_id')
  songs: Song[]
}