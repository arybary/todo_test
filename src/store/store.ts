import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tasksReducer from '../tasks/slice/tasks.slice';
import paginationReducer from '../tasks/slice/pagination.slice';
import logger from './logger';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    pagination: paginationReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
