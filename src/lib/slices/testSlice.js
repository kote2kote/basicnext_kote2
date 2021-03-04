import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'testSlice',
  initialState: {
    test: 'test',
  },
  reducers: {
    setTest: (state, action) => {
      state.test = process.env.MAIN_URL;
    },
  },
});

export const getTestState = (state) => state.testSlice;
export const { setTest } = testSlice.actions;
export default testSlice.reducer;
