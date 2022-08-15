import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() { email, password }) {
    // return this.authService.login({ email, password });
  }

  @Post('registration')
  registration(@Body() user) {
    return this.authService.registration(user);
  }
}
