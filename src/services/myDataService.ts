import { addString, incrementByAmount } from 'src/redux/counterSlice';
import { dispatch, getState } from 'src/redux/store';
import { getSheet } from './GoogleSheetService';

export const setMyData = async (sheetId: string) => {
  const sheet = await getSheet(sheetId);
  // console.log(sheet.sheetsByTitle)

  dispatch(incrementByAmount(3));
  dispatch(addString('3'));
  // const state=getState()

  // console.log(state)
};
