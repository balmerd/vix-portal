import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) {
    // DataService is not included in providers [] because it's global (defined in app.module.ts)
  }

  ngOnInit() { }

  logout(): void {
    this.dataService.logged_in = false;
    this.router.navigate(['/account/login']);
  }
}
