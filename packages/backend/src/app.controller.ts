import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseDTO } from 'utilities';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): BaseDTO {
    return this.appService.getHello();
  }
}
