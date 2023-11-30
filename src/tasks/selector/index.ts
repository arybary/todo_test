import { PaginationState } from '../slice/pagination';
import { TasksState } from '../slice/tasks';
import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state: { tasks: TasksState }) => state.tasks.tasksList;
export const selectStatus = (state: { tasks: TasksState }) => state.tasks.status;
export const selectError = (state: { tasks: TasksState }) => state.tasks.error;
export const selectPagination = (state: { pagination: PaginationState }) => state.pagination;

export const selectPaginationParam = createSelector(
    [selectPagination, selectTasks],
    (pagination, tasks) => {
        const { page, rowsPerPage } = pagination;
        const countPages = Math.ceil(tasks.length / rowsPerPage);
        const pageNumbers = Array.from({ length: countPages }, (_, index) => index + 1)
        return { page, pageNumbers, countPages, rowsPerPage };
    }
);

export const selectTasksView = createSelector(
    [selectTasks, selectPaginationParam],
    (tasks, pagination) => {
        const { page, rowsPerPage } = pagination;

        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;

        return tasks.slice(startIndex, endIndex);
    }
);
