import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const reset = createAction('[COUNTER] reset');

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};

export const counterReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1 // ++ is not allowed here as it changes original state which is prohibited by Redux rules
  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1 // Same for --
  })),
  on(reset, state => ({
    ...state,
    count: 0
  })),
);

export const featureSelector = createFeatureSelector<CounterState>('counter');
export const counterSelector = createSelector(featureSelector, state => state.count);
