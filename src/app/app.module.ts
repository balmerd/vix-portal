import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// APP modules
import { AppRoutingModule } from './app-routing.module';
import { VixMaterialModule } from './material/vix-material-module';

// APP components
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoginComponent } from './components/pages/account/login/login.component';
import { ResetPasswordComponent } from './components/pages/account/reset-password/reset-password.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TodosComponent } from './components/pages/todo/todo-list/todos.component';
import { TodoItemComponent } from './components/pages/todo/todo-item/todo-item.component';
import { AddTodoComponent } from './components/pages/todo/add-todo/add-todo.component';

// APP services
import { DataService } from './services/data.service';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertComponent,
    NotFoundComponent,
    LoginComponent,
    ResetPasswordComponent,
    HomeComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    VixMaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
