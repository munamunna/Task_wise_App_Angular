import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoModalComponent } from './add-todo-modal/add-todo-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MyModalComponent } from './my-modal/my-modal.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AllDueTodosComponent } from './all-due-todos/all-due-todos.component';



@NgModule({
  declarations: [
    AppComponent,
    UserAuthenticationComponent,
    TodoListComponent,
    AddTodoModalComponent,
    MyModalComponent,
    AllDueTodosComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot() ,
    FormsModule,
    IonicStorageModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
