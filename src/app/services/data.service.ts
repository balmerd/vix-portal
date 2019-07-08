import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  username: string;
  logged_in: boolean;

  constructor() {
    console.log(new Date().getTime() + ' : created DataService instance');
  }
}
