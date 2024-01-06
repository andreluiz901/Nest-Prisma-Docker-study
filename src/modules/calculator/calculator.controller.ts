import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorService } from '@/modules/calculator/calculator.service';
import { SomaCalculatorDTO } from '@/modules/calculator/dto/soma-calculator.dto';
import { DividirCalculatorDTO } from '@/modules/calculator/dto/dividir-calculator.dto';
import { SubtrairCalculatorDTO } from '@/modules/calculator/dto/subtrair-calculator.dto';
import { MultiplicarCalculatorDTO } from '@/modules/calculator/dto/multiplicar-calculator.dto';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('soma')
  soma(@Body() somaDTO: SomaCalculatorDTO) {
    return this.calculatorService.soma(somaDTO);
  }

  @Post('dividir')
  dividir(@Body() dividirDTO: DividirCalculatorDTO) {
    return this.calculatorService.dividir(dividirDTO);
  }

  @Post('subtrair')
  subtrair(@Body() subtrairDTO: SubtrairCalculatorDTO) {
    return this.calculatorService.subtrair(subtrairDTO);
  }

  @Post('multiplicar')
  multiplicar(@Body() multiplicarDTO: MultiplicarCalculatorDTO) {
    return this.calculatorService.multiplicar(multiplicarDTO);
  }
}
