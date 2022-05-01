import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {counterSelector, decrease, increase, reset, updatedAtSelector} from "./reducers/counter";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  updatedAt?: number;

  count$ = this.store.select(counterSelector);
  updatedAt$ = this.store.select(updatedAtSelector);
  cantDecrease$ = this.count$.pipe(map(count => count <= 0));

  constructor(private store: Store) {
  }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
