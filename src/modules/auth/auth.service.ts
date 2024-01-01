import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service'; //TODO: @
import { SignInDTO } from './dto/sign-in-auth.dto';
import { RulesFindOneByEmail } from '../users/dto/find-one-by-email-user.dto';
import { SecurityService } from '../security/security.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private securityService: SecurityService,
    private jwtService: JwtService,
  ) {}

  async signIn({ email, password }: SignInDTO) {
    const responseUser = await this.userService.findOneByEmail({
      email,
      rule: RulesFindOneByEmail.IF_NOT_EXISTS,
    });

    if (this.securityService.compareCrypt(password, responseUser.password)) {
      delete responseUser.password;
      return {
        message: 'Usuário logado',
        data: {
          access_token: await this.jwtService.signAsync(responseUser),
          user: responseUser,
        },
      }; //JWT
    }

    throw new UnauthorizedException('Senha ou Usuário inválido!');
  }
}
