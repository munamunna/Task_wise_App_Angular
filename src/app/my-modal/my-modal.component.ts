import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { TodoService } from '../todo.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css'],
})
export class MyModalComponent implements OnInit {
  formData = {
    title: '',
    description: '',
    due_date: '',
    priority: ''
  };
  
  constructor(
    private modalController: ModalController,
    private storage: Storage,
    private todoService: TodoService // Inject TodoService
  ) {}

 

  async ngOnInit() {
    
    await this.storage.create(); // Ensure storage is initialized

    // Retrieve formData from storage if it exists
    const storedFormData = await this.storage.get('formData');
    if (storedFormData) {
      this.formData = storedFormData;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async submitForm() {
    console.log('Form submitted:', this.formData);

    // Save form data to local storage
    await this.storage.set('formData', this.formData);
    console.log("stored");
    // Send form data to backend using TodoService
    try {
      // Retrieve form data from local storage
      const formData = await this.storage.get('formData');
      
      // Call the addTodo function with formData
      await this.todoService.addTodo(formData).subscribe(response => {
        console.log('Backend response:', response);
        // Handle the response as needed
        // Close the modal after form submission
        this.modalController.dismiss();
      }, error => {
        console.error('Error submitting form:', error);
        // Handle error if necessary
      });
    } catch (error) {
      console.error('Error retrieving form data:', error);
      // Handle error if necessary
    }
  }

    
    
    

    

    

 
  
 
}
