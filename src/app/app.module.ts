import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { TodosComponent } from './components/pages/todo/todo-list/todos.component';
import { TodoItemComponent } from './components/pages/todo/todo-item/todo-item.component';
import { AddTodoComponent } from './components/pages/todo/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VixMaterialModule } from './material/vix-material-module';
import { LoginComponent } from './components/pages/account/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlertComponent } from './components/alert/alert.component';

import { AlertService } from 'src/app/services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    LoginComponent,
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
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
