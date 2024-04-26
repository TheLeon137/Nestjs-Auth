import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from 'src/models/token.model';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string) {
    const users: User[] = [
      {
        username: 'cesar.deleon',
        password: '123456',
        role: 'admin',
        id: 1,
      },
    ];
    const user: User = users.find(
      (x) => x.username === username && x.password === password,
    );

    if (user) return user;

    return null;
  }
  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
