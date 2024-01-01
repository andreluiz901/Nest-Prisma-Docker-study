import { Module } from '@nestjs/common';
import { CalculatorController } from '@/src/modules/calculator/calculator.controller';
import { CalculatorService } from '@/src/modules/calculator/calculator.service';

@Module({
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}
