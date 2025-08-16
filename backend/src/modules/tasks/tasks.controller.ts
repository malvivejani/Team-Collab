import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasks: TasksService) {}

  @Get()
  all() {
    return this.tasks.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.tasks.create(body.title);
  }
}
