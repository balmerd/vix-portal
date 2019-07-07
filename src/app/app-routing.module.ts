import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/pages/todo/todo-list/todos.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/account/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Reference for lazy loading routes (not used yet):
// https://angular-checklist.io/default/checklist/router/Z165VzV

const routes: Routes = [
  { path: '', component: TodosComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  // https://angular-checklist.io/default/checklist/router/Zy4xtr
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
