import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalComponent } from '../my-modal/my-modal.component'; 
import { TodoService } from '../todo.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.css']
})
export class AddTodoModalComponent {
  todos:any
  constructor(private modalController: ModalController,private service:TodoService) {
    
    this.service.getTodos().subscribe(res=>this.todos=res)
  }
  isOverdue(todo: any): boolean {
    // Parse the due date string to a Date object
    const dueDate = new Date(todo.due_date);
    // Get the current date
    const currentDate = new Date();
    // Check if the due date is before the current date
    return dueDate < currentDate;
  }
  

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalComponent,
       // Add your custom CSS class here if needed
    });
    return await modal.present();
  }

}
