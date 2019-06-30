import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { TodoComponent } from './todo.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoInputComponent, 
    TodoListComponent, 
    TodoListItemComponent
  ],
  exports: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ]
})
export class TodoModule { }
