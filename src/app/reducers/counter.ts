import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export const COUNTER = 'counter';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const reset = createAction('[COUNTER] reset');
export const updateDate = createAction(
  '[COUNTER] update date',
  props<{ updatedAt: number }>()
);

export interface CounterState {
  count: number;
  updatedAt?: number;
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
  on(updateDate, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  })),
);

export const featureSelector = createFeatureSelector<CounterState>(COUNTER);
export const counterSelector = createSelector(featureSelector, state => state.count);
export const updatedAtSelector = createSelector(featureSelector, state => state.updatedAt);
