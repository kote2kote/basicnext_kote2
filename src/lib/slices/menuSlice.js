import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menuSlice',
  initialState: {
    test: 'aa',
  },
  reducers: {
    setTest: (state, action) => {
      state.test = 'test! from menuSlice';
    },
  },
});

export const getMenuState = (state) => state.menuSlice;
export const { setTest } = menuSlice.actions;
export default menuSlice.reducer;
