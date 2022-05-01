import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {decrease, increase, reset, updateDate} from "./reducers/counter";
import {map} from "rxjs";

@Injectable()
export class AppEffects {
  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, reset),
    map(() => updateDate({updatedAt: Date.now()}))
  ))

  constructor(private actions$: Actions) {
  }
}
