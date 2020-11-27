import { Component, OnInit } from '@angular/core';
import { Todo } from './model/Todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  allTodos: Todo[] = [];
  title = '';
  constructor(private todoService: TodoService) {}

  getTodos(): void {
    this.todoService.getAllTodos().subscribe((res) => (this.allTodos = res));
  }

  ngOnInit(): void {
    this.getTodos();
  }

  addTodo(): void {
    const todoData = { title: this.title, isCompleted: false };
    this.todoService.addTodo(todoData).subscribe((res) => {
      this.allTodos = this.allTodos.concat([res]);
      this.title = '';
    });
  }

  handleChange(todoP: Todo): void {
    const todoData = todoP;
    todoData.isCompleted = !todoP.isCompleted;
    this.todoService.updateTodo(todoData).subscribe(() => {
      this.allTodos = this.allTodos.map((todo) => {
        if (todo.id === todoData.id) {
          return todoData;
        }
        return todo;
      });
    });
  }
}
