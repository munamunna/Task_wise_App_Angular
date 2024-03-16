import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-my-modal3',
  templateUrl: './my-modal3.component.html',
  styleUrls: ['./my-modal3.component.css']
})
export class MyModal3Component {
  tododet: any;

  constructor(private modalController: ModalController,private service: TodoService,private toastController: ToastController) {}

  

  closeModal() {
    this.modalController.dismiss();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duration in milliseconds
      position: 'bottom' // Position of the toast
    });
    toast.present();
  }
  
  async updateTododetail() {
    try {
      // Call TodoService method to update the todo item
      await this.service.updateTodo(this.tododet).toPromise();
      console.log('Todo item updated successfully');
      // Display success message to the user
      this.presentToast('Todo item updated successfully');
    } catch (error) {
      console.error('Error updating todo item:', error);
      // Handle error as needed
    }
    // Close the modal after updating
    this.closeModal();
  }
  
  

  }
  

  // Add method to update todo item here

