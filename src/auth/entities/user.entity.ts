import { Column, Default, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

type UserRole = 'ADMIN' | 'USER' | 'DEVELOPER'

@Table({
  tableName: 'user',
  timestamps: true
})
export class User extends Model {
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
    type: DataType.STRING(100),
    allowNull: false
  })
  email: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  password: string;

  @Default('https://cdn-icons-png.flaticon.com/512/4874/4874892.png')
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: 'avatar_url'
  })
  avatarUrl: string;

  @Default(['USER'])
  @Column({
    type: DataType.ARRAY(DataType.ENUM('USER', 'ADMIN', 'DEVELOPER')),
    allowNull: false
  })
  role: UserRole[]
}