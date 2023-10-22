import { Inject, Module } from '@nestjs/common';
import DIService from './diPerson.service';
import classDiGuest from './diGutes.service';

const activeUsers = {
  name: 'john',
  age: 20,
  role: 'USER',
};
// standard providers
// @Injectable()

// custom providers
// if i need to use my DiService to others then i can do exports to use in others modules
@Module({
  imports: [],
  controllers: [],
  providers: [
    DIService,
    { useValue: activeUsers, provide: 'random--uuid' },
    { useClass: classDiGuest, provide: 'guest-uuid' },
  ],
  exports: [DIService],
})
export class DiModule {
  constructor(
    private readonly user: DIService,
    //* remember the provide id and inject must be same because we are telling nest IOC container that okay create the object with unique id
    @Inject('random--uuid') private readonly activeUser: typeof activeUsers,
    @Inject('guest-uuid') private readonly guestUser: classDiGuest,
  ) {
    console.log('dependencies injection is', user.getUser());
    console.log('activeUsers', activeUser); // amazing right ?

    console.log('custom class injected code is', guestUser.getGuestName());
  }
}
