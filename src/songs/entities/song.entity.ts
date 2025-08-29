import { allow } from "joi";
import { Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";

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
    type: DataType.DATE,
    allowNull: false,
  })
  release_date: string
}
