import { Component, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-my-modal2',
  templateUrl: './my-modal2.component.html',
  styleUrls: ['./my-modal2.component.css'],
})
export class MyModal2Component {
   tododetail: any;
   newDueDate: string = '';

  constructor(
    private modalController: ModalController,
    private todoService: TodoService,
    private toastController: ToastController
  ) { }

  closeModal() {
    this.modalController.dismiss();
  }

  async updateTodo() {
    try {
      // Call the updateDueDate method in TodoService to update the due date
      await this.todoService.updateDueDate(this.tododetail.id, this.newDueDate).toPromise();
      // Display a success message
      this.presentToast('Todo updated successfully');
      // Close the modal
      this.closeModal();
    } catch (error) {
      // Display an error message if update fails
      console.error('Error updating todo:', error);
      this.presentToast('Error updating todo');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
