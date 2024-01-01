import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in-auth.dto';

@Controller('signIn')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  signIn(@Body() { email, password }: SignInDTO) {
    return this.authService.signIn({ email, password });
  }
}
