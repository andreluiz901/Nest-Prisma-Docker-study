import { Module } from '@nestjs/common';
import { CalculatorController } from '@/modules/calculator/calculator.controller';
import { CalculatorService } from '@/modules/calculator/calculator.service';

@Module({
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}
