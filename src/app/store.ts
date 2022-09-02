import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import inputForm from '../features/inputForm/inputForm';

export const store = configureStore({
  reducer: {
    inputForm: inputForm,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
