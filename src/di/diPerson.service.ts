import { Injectable } from '@nestjs/common';

@Injectable()
export default class DIService {
  public getUser() {
    return {
      name: 'Nabin',
      age: 20,
      email: 'nabin@coolemail.com',
    };
  }
}
