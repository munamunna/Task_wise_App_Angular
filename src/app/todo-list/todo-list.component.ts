import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}

  updateDueDate(todoItemId: number, newDueDate: string) {
    this.todoService.updateDueDate(todoItemId, newDueDate)
      .subscribe(
        response => {
          // Handle success: Maybe update the todo list with the new data
          console.log('Due date updated successfully:', response);
        },
        error => {
          // Handle error: Display an error message or handle it appropriately
          console.error('Error updating due date:', error);
        }
      );
  }
}
