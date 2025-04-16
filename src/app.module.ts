import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './database/database.service';
import configuration from './config/configuration';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TodosService } from './todos/todos.service';
import { TodosController } from './todos/todos.controller';
import { UsersRepository } from './users/users.repository';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env', '.env.local'],
    load: [configuration],
  })],
  controllers: [AppController, UsersController, TodosController],
  providers: [AppService, DatabaseService, PrismaService, UsersService, TodosService, UsersRepository],
})
export class AppModule {}
