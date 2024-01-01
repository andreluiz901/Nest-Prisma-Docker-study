import { Module } from '@nestjs/common'; //TODO: @
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module';
import { SecurityModule } from '../security/security.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [DatabaseModule, SecurityModule],
  exports: [UsersService],
})
export class UsersModule {}
