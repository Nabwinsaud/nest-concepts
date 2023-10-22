import { Injectable } from '@nestjs/common';

@Injectable()
export default class classDiGuest {
  getGuestName() {
    return {
      name: 'guest',
      ip: 'anonymous',
    };
  }
}
