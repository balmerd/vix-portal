import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/account/login/login.component';
import { TodosComponent } from './components/pages/todo/todo-list/todos.component';
import { TodoItemComponent } from './components/pages/todo/todo-item/todo-item.component';
import { AddTodoComponent } from './components/pages/todo/add-todo/add-todo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlertComponent } from './components/alert/alert.component';
import { VixMaterialModule } from './material/vix-material-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    NotFoundComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    VixMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
