import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalComponent } from '../my-modal/my-modal.component'; 
import { MyModal2Component } from '../my-modal2/my-modal2.component'; 
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { any } from 'cypress/types/bluebird';


@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.css']
})
export class AddTodoModalComponent {
  todos:any
  tododetail:any
  selectedTodoId: number | null = null;
  overdueItems: any;
  
 
  
  constructor(private modalController: ModalController,private service:TodoService,private router: Router,private toastController: ToastController) {
    
    this.service.getTodos().subscribe(res=>this.todos=res)

   
  }
  
  gettTodoDetail(todoItemId: number) {
    this.selectedTodoId = todoItemId;
    this.service.getTodoDetail(todoItemId).subscribe(
      (todoDetail: any) => {
        this.tododetail = todoDetail;
        console.log(this.tododetail);
      },
      error => {
        console.error('Error fetching overdue todo details:', error);
      }
    );
  }

  checkOverdueItems() {
    console.log('Checking overdue items...');
    this.service.getOverdueTodos().subscribe(
      (overdueItems: any) => {
        console.log('Received overdue items:', overdueItems);
        if (overdueItems && Array.isArray(overdueItems) && overdueItems.length > 0) {
          console.log('Overdue items found. Showing notification...');
          this.showOverdueNotification();
        } else {
          console.log('No overdue items found.');
        }
        this.overdueItems = overdueItems;
      },
      error => {
        console.error('Error fetching overdue items:', error);
      }
    );
  }
  
  

  async showOverdueNotification() {
    const toast = await this.toastController.create({
      message: 'There are overdue items in your list.',
      duration: 5000, // Display for 5 seconds
      position: 'top'
    });
    toast.present();
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

  

  async openModal2() {
    const modal = await this.modalController.create({
      component: MyModal2Component,
      componentProps: {
        tododetail: this.tododetail // Pass tododetail as component property
      }
       // Add your custom CSS class here if needed
    });
    return await modal.present();
  }
}
  
  



