import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DiModule } from './di/di.module';
import DIService from './di/diPerson.service';

// standard providers
// @Injectable()
@Module({
  imports: [AuthModule, UserModule, DiModule],
  controllers: [AppController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {
  // Potential solutions:
  // - If DIService is a provider, is it part of the current AppModule?

  // now we have successfully exported the DIService now no need to pass in Providers
  constructor(private readonly user: DIService) {
    console.log('dependencies injection is', user.getUser());
  }
}
