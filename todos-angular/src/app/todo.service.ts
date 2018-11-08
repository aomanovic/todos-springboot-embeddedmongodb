import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.baseUrl + '/api/todos/');
  }

  createTodo(todoData: Todo) {
    return this.http.post(this.baseUrl + '/api/todos/', todoData);
  }

  updateTodo(todoData: Todo) {
    return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData);
  }

  deleteTodo(id: string) {
    return this.http.delete(this.baseUrl + '/api/todos/' + id);
  }
}
