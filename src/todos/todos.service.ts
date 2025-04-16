import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TodosService {
  constructor(private DatabaseService: DatabaseService) {}
  create(createTodoDto: CreateTodoDto) {
    this.DatabaseService.query(
      'INSERT INTO todos (title, description, completed, user_id) VALUES ($1, $2, $3, $4)',
      [createTodoDto.title, createTodoDto.description, createTodoDto.completed, createTodoDto.userId],
    )
    return 'This action adds a new todo';
  }

  findAll() {
    return this.DatabaseService.query('SELECT * FROM todos');
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
