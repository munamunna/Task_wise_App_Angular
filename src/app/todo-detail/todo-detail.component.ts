import { Component } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  tododetail:any
  constructor(private service:TodoService) {

}

}
