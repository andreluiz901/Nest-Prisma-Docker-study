import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @Length(3, 1000, {
    message: 'O nome é muito curto favor informar o nome completo',
  })
  @IsNotEmpty()
  fullName: string;

  @IsEmail({}, { message: 'Favor informar um emil válido' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  profile_photo?: string;
}
