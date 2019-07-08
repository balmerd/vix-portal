import { Component, Renderer, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [AlertService]
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  email: string;
  sent_email: boolean;

  constructor(private renderer: Renderer, private alertService: AlertService) {}

  ngOnInit() {
    this.renderer.setElementClass(document.body, 'overlay', true);
  }

  ngOnDestroy() {
    this.renderer.setElementClass(document.body, 'overlay', false);
  }

  sendPasswordResetEmail(): void {
    this.sent_email = true;
    this.alertService.success(`Sent password reset email to ${this.email}.`);
  }
}
