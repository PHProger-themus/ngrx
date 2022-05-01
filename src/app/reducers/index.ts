import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {COUNTER, counterReducer, CounterState} from "./counter";

export interface State {
  [COUNTER]: CounterState
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER]: counterReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
