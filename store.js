import { configureStore } from '@reduxjs/toolkit';
import testReducer from 'lib/slices/testSlice';

export default configureStore({
  reducer: {
    testSlice: testReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
