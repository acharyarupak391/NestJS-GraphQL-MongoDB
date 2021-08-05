import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()   // will route as /api/hello
  getHello(): string {
    return this.appService.getHello();
    // return {response: "Hello from /api/hello"}
  }

  @Get('user')
  @Header('Content-Type', 'application/json')
  sendUser(): any {
    return {name: "Harry"}
  }

}
