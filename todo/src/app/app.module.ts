import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInputTxtComponent } from './todo-input/todo-input-txt/todo-input-txt.component';
import { TodoInputBtnComponent } from './todo-input/todo-input-btn/todo-input-btn.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoInputTxtComponent,
    TodoInputBtnComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
