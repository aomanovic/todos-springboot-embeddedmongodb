import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';
import {MatDialog, MatDialogRef} from '@angular/material';
import {TodoDialogComponent} from "./todo-dialog.component";
import {Validators} from "@angular/forms";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = new Todo();
  editing: boolean = false;
  editingTodo: Todo = null;
  showDialog = false;


  todoDialogRef: MatDialogRef<TodoDialogComponent>;

  constructor(private dialog: MatDialog, private todoService: TodoService) {}


  openTodoDialog(todo?) {
    this.todoDialogRef = this.dialog.open(TodoDialogComponent, {
      data: {
        title: [todo ? todo.title : '', [Validators.required, Validators.maxLength(100)]],
        description: [todo ? todo.description : '', [Validators.required, Validators.maxLength(1000)]],
        eventTime: [todo ? todo.eventTime : Date.now(), [Validators.required]]
      }
    });

    this.todoDialogRef.afterClosed().subscribe(todo => {
      console.log(`Dialog result: ${todo}`);
      if (todo) {
        const index = this.todos.findIndex(f => f.id === todo.id && f.title == todo.title);
        if (index !== -1) {
          this.updateTodo(todo);
        }
        else {
          this.newTodo = todo;
          this.createTodo();
        }
      }
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe((data: any) => {
        if (data) {
          this.todos = data as Todo[];
        }
      }, error => {
        console.log(error);
      });
  }

  createTodo(): void {
    this.todoService.createTodo(this.newTodo)
      .subscribe((createTodo: any) => {
        this.newTodo = new Todo();
        this.todos.unshift(createTodo)
      }, error => {
        console.log(error);
      });
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id)
    .subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id != id);
    });
  }

  deleteMultipleTodos(): void {
    this.todos.forEach((todo, index) => {
      if(todo.checked) {
        this.todoService.deleteTodo(todo.id)
          .subscribe(() => {
            console.log('deleted: ' + todo.id);

            this.todos = this.todos.filter(remaining => remaining.id !== todo.id);
          });
      }
    });

  }

  isDeleteMultipleAllowed(): boolean {
    const checkedList = this.todos.filter(todo => todo.checked);
    return checkedList && checkedList.length > 1;
  }

  updateTodo(todoData: Todo): void {
    console.log(todoData);
    this.todoService.updateTodo(todoData)
    .subscribe(updatedTodo => {
      let existingTodo = this.todos.find(todo => todo.id === (updatedTodo as Todo).id);
      Object.assign(existingTodo, updatedTodo);
    });
  }


}
