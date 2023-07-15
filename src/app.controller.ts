import { Controller, Get, UseGuards, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthenticatedGuard } from './auth/guards/Authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): string {
    return null;
  }

  @UseGuards(LocalAuthGuard)
  @Get('login')
  login(): string {
    return 'hello welcome';
  }

  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  getProfile(): string {
    return 'hello profile';
  }
}
