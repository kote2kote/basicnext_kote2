import { configureStore } from '@reduxjs/toolkit';
import menuReducer from 'lib/slices/menuSlice';

export default configureStore({
  reducer: {
    menuSlice: menuReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
