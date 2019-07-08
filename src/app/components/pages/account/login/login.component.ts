import { Component, Renderer, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
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

  constructor(private router: Router, private renderer: Renderer, private alertService: AlertService, private dataService: DataService) { }

  ngOnInit() {
    this.renderer.setElementClass(document.body, 'overlay', true);
  }

  ngOnDestroy() {
    this.renderer.setElementClass(document.body, 'overlay', false);
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.dataService.username = this.username;
      this.dataService.logged_in = true;
      this.router.navigate(['']);
    } else {
      this.dataService.logged_in = false;
      // TODO: need to make alert global, not specific to login page
      this.alertService.error('Invalid credentials (hint: use admin / admin)');
    }
  }
}
