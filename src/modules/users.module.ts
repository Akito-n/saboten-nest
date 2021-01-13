import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModel } from "src/models/user.model";
import { UsersService } from "src/services/users/users.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],

  providers: [UsersService],

  exports: [UsersService]
})

export class UserModule {}
