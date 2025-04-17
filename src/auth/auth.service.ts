import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private UsersService: UsersService,
    private jwt: JwtService,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.UsersService.findOneByEmail(email);
    console.log(user[0].password, password);
    if (user[0].password !== password) {
      console.log('Invalid credentials');
      throw new UnauthorizedException();
      
    }

    const payload = { user_id: user.id };

    return this.jwt.sign(payload);
  }
}
