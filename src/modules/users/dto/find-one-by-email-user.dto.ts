import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto'; //TODO: @

export enum RulesFindOneByEmail {
  IF_EXISTS,
  IF_NOT_EXISTS,
}

export class FindOneByEmailDTO extends PickType(CreateUserDto, ['email']) {
  rule: RulesFindOneByEmail;
}
