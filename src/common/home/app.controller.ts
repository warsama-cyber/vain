import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestException } from '@common/home/app.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new TestException();
  }
}
