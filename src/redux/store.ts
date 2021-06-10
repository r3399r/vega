import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

let store: any;

export const configStore = () => {
  store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

  return store;
};

export const getState = () => store.getState();

export const dispatch = <T>(action: PayloadAction<T>) => store.dispatch(action);
