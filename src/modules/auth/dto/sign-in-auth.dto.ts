import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../../users/dto/create-user.dto'; //TODO: @

export class SignInDTO extends PickType(CreateUserDto, ['email', 'password']) {}
