import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/todos';

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(todoData: { title: string }): Observable<Todo> {
    return this.http.post<Todo>(this.url, todoData);
  }

  updateTodo(todoData: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${todoData.id}`, todoData);
  }
}
