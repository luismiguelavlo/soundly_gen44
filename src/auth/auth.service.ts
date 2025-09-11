import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { JwtPayload } from './interfaces/jwt-payload';
import { JwtService } from '@nestjs/jwt';
import { RESPONSE } from './constants/responses-messages';


@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly jwtService: JwtService
  ) { }

  async register(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: bcrypt.hashSync(createUserDto.password, 12),
      avatarUrl: 'https://cdn-icons-png.flaticon.com/512/4874/4874892.png',
      role: ['USER']
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

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.userModel.findOne({
      where: {
        email: email,
        //si manejaremos status de usuario, aqui se debe agregar
      }
    })

    if (!user) {
      throw new UnauthorizedException(RESPONSE.CREDENTIALS_ARE_NOT_VALID)
    }

    if (!bcrypt.compareSync(password, user.dataValues.password)) {
      throw new UnauthorizedException(RESPONSE.CREDENTIALS_ARE_NOT_VALID)
    }

    return {
      token: this.getJwtToken({ id: user.id }),
      user: {
        id: user.id,
        name: user.dataValues.name,
        email: user.dataValues.email,
        avatarUrl: user.dataValues.avatarUrl,
        role: user.dataValues.role
      }
    }
  }

  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}

