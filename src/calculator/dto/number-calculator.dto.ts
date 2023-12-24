import { IsNotEmpty, IsNumber, IsPositive } from "class-validator"

export class NumberCalculatorDTO {

    @IsNumber({}, { message: 'É necessário inserir um número para divisão' })
    @IsNotEmpty({ message: 'Favor preencher o campo number1' })
    @IsPositive({ message: 'Favor inserir um número positivo' })
    number1: number

    @IsNumber({}, { message: 'É necessário inserir um número para divisão' })
    @IsNotEmpty({ message: 'Favor preencher o campo number2' })
    @IsPositive({ message: 'Favor inserir um número positivo' })
    number2: number
}