import { Module } from '@nestjs/common'; //TODO: @
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module';
import { SecurityModule } from '../security/security.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtService],
  imports: [DatabaseModule, SecurityModule, JwtModule],
  exports: [UsersService],
})
export class UsersModule {}
