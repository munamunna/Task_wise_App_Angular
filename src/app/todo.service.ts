import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import {HttpParams} from '@angular/common/http';


import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {
 
  
  async ngOnInit() {
    
    await this.storage.create(); // Ensure storage is initialized
  }

  
  constructor(private http: HttpClient,private storage: Storage,) { }

  addTodo(formData:any,): Observable<any> {
    // Get the token from local storage
    const token = localStorage.getItem('authToken');
    

    // Prepare headers with Authorization token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });

    return this.http.post("https://munamariyam.pythonanywhere.com/todo_list/todos/", formData, {headers});
  }


  private apiUrl = 'https://munamariyam.pythonanywhere.com/todo_list/todos/';

  getTodos() {
    const token = localStorage.getItem('authToken');
    let headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
      

    });
    return this.http.get("https://munamariyam.pythonanywhere.com/todo_list/todos/",{"headers":headers});
  }

  getsTodos(sortBy: string) {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });

    let params = new HttpParams();
    if (sortBy) {
      params = params.set('sort_by', sortBy);
    }

    return this.http.get(this.apiUrl, { headers: headers, params: params });
  }
 

  getOverdueTodos() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });
  
    return this.http.get("https://munamariyam.pythonanywhere.com/todo_list/todos/overdue/", { headers }).pipe(
      
    );
  }
  
  

  getOverdueTodoDetail(todoItemId: number) {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });

    return this.http.get(`https://munamariyam.pythonanywhere.com/todo_list/todos/overdue/${todoItemId}/`, { headers: headers });
  }

  getTodoDetail(todoItemId: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });

    return this.http.get(`https://munamariyam.pythonanywhere.com/todo_list/todos/${todoItemId}/`, { headers: headers });
  }

  updateDueDate(todoItemId: number, newDueDate: string): Observable<any> {

    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });

    const url = `https://munamariyam.pythonanywhere.com/todo_list/todos/${todoItemId}/update_due_date/`;
     // Modify the URL as per your Django endpoint
    return this.http.put(url, { new_due_date: newDueDate },{ headers: headers });
  }


  updateTodo(todoItem: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });
  
    const url = `https://munamariyam.pythonanywhere.com/todo_list/todos/${todoItem.id}/`; // Assuming your endpoint follows this pattern
    return this.http.put(url, todoItem, { headers: headers }); // Pass todoItem as the second argument to send updated data
  }
  


  deleteTodo(todoItemId: number): Observable<any> {

    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });

    const url = `https://munamariyam.pythonanywhere.com/todo_list/todos/${todoItemId}/`;
     // Modify the URL as per your Django endpoint
    return this.http.delete(url,{ headers: headers });
  }
}

