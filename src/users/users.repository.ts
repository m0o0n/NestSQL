import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(
    private databaseService: DatabaseService,
    private prisma: PrismaService,
  ) {}

  async getUserWithTodos(userId: number) {
    const sql = readFileSync(
      join(__dirname, '../../sql/users/getAllUsersWithTodos.sql'),
      'utf8',
    );
    return this.databaseService.query(sql, []);
  }

  async createUser(createUserDto: CreateUserDto) {
    await this.prisma.users.create({ data: { ...createUserDto } });
  }
}
