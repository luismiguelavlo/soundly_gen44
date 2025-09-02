import { Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Song } from "src/songs/entities/song.entity";

@Table({
  tableName: 'genre',
  timestamps: true
})
export class Genre extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare id: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  description: string;

  @HasMany(() => Song, 'genre_id')
  songs: Song[]
}