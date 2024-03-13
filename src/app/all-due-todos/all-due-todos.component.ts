import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-all-due-todos',
  templateUrl: './all-due-todos.component.html',
  styleUrls: ['./all-due-todos.component.css']
})
export class AllDueTodosComponent implements OnInit {
  dueTodos: any[] = [];

  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.loadDueDateTodos();
  }

  loadDueDateTodos() {
    this.service.getOverdueTodos().subscribe(
      (res: any) => {
        this.dueTodos = res;
      },
      (error: any) => {
        console.error('Error fetching due date todos:', error);
      }
    );
  }
}
