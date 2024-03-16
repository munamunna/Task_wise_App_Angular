import { Component, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { any } from 'cypress/types/bluebird';

@Component({
  selector: 'app-my-modal2',
  templateUrl: './my-modal2.component.html',
  styleUrls: ['./my-modal2.component.css'],
})
export class MyModal2Component {
  selecteddTodoId: number | null = null;
   newDueDate: string = '';
  
   

  constructor(
    private modalController: ModalController,
    private todoService: TodoService,
    private toastController: ToastController
  ) { }

  closeModal() {
    this.modalController.dismiss();
  }
  reschedule() {
    if (!this.selecteddTodoId) {
      console.error('No todo selected');
      return;
    }
    if (!this.newDueDate) {
      console.error('No new due date provided');
      return;
    }
    
    // Call the service function to update the due date
    this.todoService.updateDueDate(this.selecteddTodoId, this.newDueDate)
      .subscribe(
        () => {
          console.log('Due date updated successfully');
          // Optionally, you can close the modal after successful update
          this.closeModal();
        },
        error => {
          console.error('Error updating due date:', error);
          // Handle error appropriately, e.g., show an error message
        }
      );
  }
 
}
