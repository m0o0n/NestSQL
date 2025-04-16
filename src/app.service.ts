import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  // createUser() {
  //   const userData: Prisma.UserCreateInput = {
  //     name: 'John Doe',
  //     email: 'Test1@test.test',
  //     password: '123456',
  //   }
  //   return this.prisma.user.create({ data: userData });
  // }

  // getUsers() {
  //   return this.prisma.user.findMany();
  // }
}
