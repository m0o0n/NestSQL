import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { UsersRepository } from './users.repository';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class UsersService {
  constructor(
    private DatabaseService: DatabaseService,
    private UsersRepository: UsersRepository,
    private prisma: PrismaService,
  ) {}
  create(createUserDto: CreateUserDto) {
    this.UsersRepository.createUser(createUserDto);
    return 'User created successfully';
  }

  findAll() {
    return this.DatabaseService.query('SELECT * FROM users');
  }

  findOne(id: number) {
    return this.DatabaseService.query('SELECT * FROM users WHERE id = $1', [
      id,
    ]);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // const keys = Object.keys(updateUserDto);
    // const valuesString = keys
    //   .map((key, index) => `${key} = $${index + 1}`)
    //   .join(', ');
    // const values = [...keys.map((key) => updateUserDto[key]), id];
    // return this.DatabaseService.query(
    //   `UPDATE users SET ${valuesString} WHERE id = $${values.length}`,
    //   values,
    // );
    await this.prisma.users.update({
      where: { id }, 
      data: updateUserDto,
    });
    const user = await this.prisma.users.findUnique({
      where: { id },
    });
    return user;
  }

  remove(id: number) {
    return this.DatabaseService.query('DELETE FROM users WHERE id = $1', [id]);
  }

  getUserTodos(id: number) {
    return this.UsersRepository.getUserWithTodos(id);
  }
}
