import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tasksReducer from '../tasks/slice/tasks';
import paginationReducer from '../tasks/slice/tasks';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    paginationReducer: paginationReducer
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
