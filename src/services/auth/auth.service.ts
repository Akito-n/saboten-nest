import bcrypt = require('bcrypt')
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/models/user.model';
import { UsersService } from '../users/users.service';
import { stringify } from 'querystring';

type PasswordOmitUser = Omit<UserModel, 'password'>
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private usesrService: UsersService) {}

  //認証
  async validateUser(email: string, password: string): Promise<PasswordOmitUser | undefined>{
    const user = await this.usesrService.findOne(email)

    //userを取得したい、passwordはハッシュ化しておきたい
    if(user && bcrypt.compareSync(password, user.password)){
      const { password, ...result} = user //passwordは出さないようにする

      return result
    }

    return null
  }


  async login(user: PasswordOmitUser){
    const payload = {userId: user.id, username: user.name}

    return {
      access_token: this.jwtService.sign(payload)
    }

  }
}
