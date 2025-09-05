import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User
  ) { }

  async register(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: bcrypt.hashSync(createUserDto.password, 12),
      avatarUrl: 'https://cdn-icons-png.flaticon.com/512/4874/4874892.png'
    })

    return {
      user: {
        id: newUser.id,
        name: newUser.dataValues.name,
        email: newUser.dataValues.email,
        avatarUrl: newUser.dataValues.avatarUrl
      }
    }
  }

  async login(loginUserDto: LoginUserDto) { }
}

