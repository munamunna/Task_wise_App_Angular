import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-due-todo-detail',
  templateUrl: './due-todo-detail.component.html',
  styleUrls: ['./due-todo-detail.component.css']
})
export class DueTodoDetailComponent {

  overduetododetails: any;
  overdueTodoDetails: any;

  constructor(private service: TodoService) {}

  loadOverdueTodoDetail(todoItemId: number) {
    this.service.getOverdueTodoDetail(todoItemId).subscribe(
      (todoDetail: any) => {
        this.overdueTodoDetails = todoDetail;
      },
      error => {
        console.error('Error fetching overdue todo details:', error);
      }
    );
  }

}
