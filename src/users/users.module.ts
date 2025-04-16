import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseService } from 'src/database/database.service';
import { UsersRepository } from './users.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, DatabaseService, UsersRepository, PrismaService],
})
export class UsersModule {}
