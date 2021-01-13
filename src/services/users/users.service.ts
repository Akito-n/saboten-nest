import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {UserModel } from '../../models/user.model'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>
  ) {}

  findOne(email: string): Promise<UserModel | undefined> {
    return this.userRepository.findOne({where: {email}})
  }
}
