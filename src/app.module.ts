import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './products/products.module';
import { CalculatorModule } from '@/src/calculator/calculator.module';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './modules/customers/customers.module';
import * as joi from 'joi'

@Module({
  imports: [UsersModule, ProductsModule, CalculatorModule, ConfigModule.forRoot({ validationSchema: joi.object({ TEST: joi.string().valid('development', 'production', 'test').required() }) }), CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
