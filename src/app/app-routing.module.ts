import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoModalComponent } from './add-todo-modal/add-todo-modal.component';
import { AllDueTodosComponent } from './all-due-todos/all-due-todos.component';

const routes: Routes = [
 
  {path:"users",component:UserAuthenticationComponent},
  {path:"todos",component:TodoListComponent},
  {path:"addtodos",component:AddTodoModalComponent},
  {path:"all-due-todos",component:AllDueTodosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
