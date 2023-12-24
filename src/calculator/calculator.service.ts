import { SomaCalculatorDTO } from '@/src/calculator/dto/soma-calculator.dto'
import { DividirCalculatorDTO } from '@/src/calculator/dto/dividir-calculator.dto'
import { BadRequestException } from '@nestjs/common'
import { SubtrairCalculatorDTO } from '@/src/calculator/dto/subtrair-calculator.dto'
import { MultiplicarCalculatorDTO } from '@/src/calculator/dto/multiplicar-calculator.dto'

export class CalculatorService {

    soma({ number1, number2 }: SomaCalculatorDTO): number {
        return number1 + number2
    }

    dividir({ number1, number2 }: DividirCalculatorDTO): number | string {
        if (number1 < number2) throw new BadRequestException('O resultado não pode ser menor que 1')
        return number1 / number2
    }

    //subtrair (resultado não pode < 0)
    subtrair({ number1, number2 }: SubtrairCalculatorDTO): number | string {
        if (number1 < number2) throw new BadRequestException('O resultado não pode ser menor que 0')
        return number1 - number2
    }

    //multiplicar (resultado nunca pode dar o mesmo número que um dos dois parâmetros)
    multiplicar({ number1, number2 }: MultiplicarCalculatorDTO): number | string {
        //if (number1 === 1 || number2 === 1) throw new BadRequestException('O resultado não pode ser igual ao number1 ou number2')
        if ([number1, number2].includes(1)) throw new BadRequestException('O resultado não pode ser igual ao number1 ou number2')

        return number1 * number2
    }
}