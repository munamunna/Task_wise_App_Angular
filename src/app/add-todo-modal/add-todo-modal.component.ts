import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalComponent } from '../my-modal/my-modal.component'; 
import { MyModal2Component } from '../my-modal2/my-modal2.component'; 
import { MyModal3Component } from '../my-modal3/my-modal3.component';
import { Mymodal4Component } from '../mymodal4/mymodal4.component'; 
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Todo } from './todo';






@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.css']
})
export class AddTodoModalComponent {
 

  tododetail: any;
  tododet:any
  selectedTodoId: number | null = null;
  overdueItems: any;
  todoitem:any;
  selecteddTodoId: number | null = null;
  todos: any;

  

  
  
  constructor(private modalController: ModalController, private service: TodoService, private router: Router, private toastController: ToastController) {
    this.service.getTodos().subscribe(res => this.todos = res);
    this.getOverdueItems();
  }
  getSortedTodos(sortBy: string): void {
    this.service.getsTodos(sortBy)
      .subscribe((res) => {
        this.todos = res;
      });
  }
  
  gettTodoDetail(todoItemId: number) {
    this.selectedTodoId = todoItemId;
    this.service.getTodoDetail(todoItemId).subscribe(
      (todoDetail: any) => {
        this.tododetail = todoDetail;
        console.log(this.tododetail);
      },
      error => {
        console.error('Error fetching todo details:', error);
      }
    );
  }

  
  
  
  
  async getOverdueItems() {
    try {
      this.overdueItems = await this.service.getOverdueTodos().toPromise();
      console.log('Received overdue items:', this.overdueItems);
      if (this.overdueItems && this.overdueItems.length > 0) { // Check if the list is not empty
        console.log('Overdue items found. Showing notification...');
        this.showOverdueNotification();
      } else {
        console.log('No overdue items found.');
      }
    } catch (error) {
      console.error('Error fetching overdue items:', error);
    }
  }
  

  async showOverdueNotification() {
    const toast = await this.toastController.create({
      message: 'There are overdue items in your list.',
      duration: 9000, // Display for 5 seconds
      position: 'top'
    });
    toast.present();
  }
  
  

  isOverdue(todo: any): boolean {
    const dueDate = new Date(todo.due_date);
    const currentDate = new Date();
    return dueDate < currentDate;
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalComponent,
    });
    return await modal.present();
  }

  async openModal2(todoId: number) {
    this.selecteddTodoId = todoId;
    const modal = await this.modalController.create({
      component: MyModal2Component,
      componentProps: {
        selecteddTodoId: this.selecteddTodoId
      }
    });
    return await modal.present();
  } 
  

  async openModal3(tododet:any) {
    this.tododet = tododet;
    
    const modal = await this.modalController.create({
      component: MyModal3Component, 
      componentProps: {
        tododet: this.tododet
      }
    });
    return await modal.present();
}
async openModal4(todoitem:any) {
  this.todoitem = todoitem;
  
  const modal = await this.modalController.create({
    component: Mymodal4Component, 
    componentProps: {
      todoitem: this.todoitem
    }
  });
  return await modal.present();
}
getTodoClasses(todo: any): any {
  return {
    'overdue': this.isOverdue(todo),
    'high-priority': todo.priority === 'HIGH',
    'medium-priority': todo.priority === 'MEDIUM',
    'low-priority': todo.priority === 'LOW'
  };
}
}