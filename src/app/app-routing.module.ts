import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoModalComponent } from './add-todo-modal/add-todo-modal.component';
import { AllDueTodosComponent } from './all-due-todos/all-due-todos.component';
import { DueTodoDetailComponent } from './due-todo-detail/due-todo-detail.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
 
  {path:"",component:UserAuthenticationComponent},
  {path:"todos",component:TodoListComponent},
  {path:"addtodos",component:AddTodoModalComponent},
  {path:"all-due-todos",component:AllDueTodosComponent},
  {path:"duetododetail",component:DueTodoDetailComponent},
  {path:"tododetail",component:TodoDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
