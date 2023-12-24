import { Module } from "@nestjs/common";
import { CalculatorController } from "@/src/calculator/calculator.controller";
import { CalculatorService } from "@/src/calculator/calculator.service";

@Module({
    controllers: [CalculatorController],
    providers: [CalculatorService]
})
export class CalculatorModule {

}