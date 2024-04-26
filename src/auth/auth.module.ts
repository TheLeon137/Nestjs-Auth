import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: 'THE123!@#',
          signOptions: {
            expiresIn: '18d',
          },
        };
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
