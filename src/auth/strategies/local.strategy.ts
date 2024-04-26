import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/models/user.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  async validate(username: string, passport: string) {
    const user: User = await this.authService.validateUser(username, passport);
    if (!user) throw new UnauthorizedException('Not Allowed');

    return user;
  }
}
