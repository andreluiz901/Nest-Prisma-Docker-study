import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [ConfigModule]
})
export class CustomersModule { }
