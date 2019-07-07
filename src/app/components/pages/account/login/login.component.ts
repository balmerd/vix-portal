import { Component, Renderer, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AlertService]
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string;
  password: string;

  constructor(
    private router: Router,
    private renderer: Renderer,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.renderer.setElementClass(document.body, 'overlay', true);
  }

  ngOnDestroy() {
    this.renderer.setElementClass(document.body, 'overlay', false);
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['about']);
    } else {
      // this did nothing until <app-alert></app-alert> was included in login.component.html
      // TODO: need to make alert global, not specific to login page
      this.alertService.error('Invalid credentials (hint: use admin / admin)');
    }
  }
}
