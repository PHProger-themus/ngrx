import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  updatedAt?: number;

  increase(): void {
    this.updatedAt = Date.now();
    this.counter++;
  }

  decrease(): void {
    this.updatedAt = Date.now();
    this.counter--;
  }

  reset(): void {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
