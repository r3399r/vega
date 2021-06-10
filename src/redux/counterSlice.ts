import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type counterState = { value: number; text: string };

const initialState: counterState = {
  value: 0,
  text: '0',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: counterState) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state: counterState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: counterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    addString: (state: counterState, action: PayloadAction<string>) => {
      state.text += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addString } = counterSlice.actions;

export default counterSlice.reducer;
