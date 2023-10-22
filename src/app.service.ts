import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNabin(): string {
    return 'The full stack developer';
  }

  getUsers(): string {
    return 'The Nabin is here';
  }
}
