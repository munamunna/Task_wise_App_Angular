import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-mymodal4',
  templateUrl: './mymodal4.component.html',
  styleUrls: ['./mymodal4.component.css']
})
export class Mymodal4Component {

  todoitem: any;

  constructor(private modalController: ModalController,private service: TodoService) {}

  

  closeModal() {
    this.modalController.dismiss();
  }

  async delete() {
    try {
      // Call TodoService method to delete the todo item
      await this.service.deleteTodo(this.todoitem.id).toPromise();
      console.log('Todo item deleted successfully');
      // Optionally, you can emit an event or handle success response here
    } catch (error) {
      // Handle error response from the backend
      console.error('Error deleting todo item:', error);
    }
    // Close the modal after deleting
    this.closeModal();
  }

}
