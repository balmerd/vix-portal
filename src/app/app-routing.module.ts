import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodosComponent } from './components/pages/todo/todo-list/todos.component';
import { LoginComponent } from './components/pages/account/login/login.component';
import { ResetPasswordComponent } from './components/pages/account/reset-password/reset-password.component';

// Reference for lazy loading routes (not used yet):
// https://angular-checklist.io/default/checklist/router/Z165VzV

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'account/login', component: LoginComponent, pathMatch: 'full' },
  { path: 'account/forgot-password', component: ResetPasswordComponent, pathMatch: 'full' },
  { path: 'todo', component: TodosComponent, pathMatch: 'full' },
  // https://angular-checklist.io/default/checklist/router/Zy4xtr
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
