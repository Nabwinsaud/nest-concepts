import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/nabwin')
  getNabin(): string {
    return this.appService.getNabin();
  }

  @Get('/users')
  async getUsers() {
    return this.appService.getUsers();
  }
}
