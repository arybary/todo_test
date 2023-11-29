import { createAsyncThunk } from '@reduxjs/toolkit';
import * as tasksAPI from '../api';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await tasksAPI.fetchTasksList();
    return response;
});

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (text: string, { dispatch }) => {
        const newTask = { text, done: false, createdAt: new Date() };
        const response = await tasksAPI.createTask(newTask);
        dispatch(fetchTasks());
        return response;
    }
);

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async (
        { id, updatedTask }: { id: string; updatedTask: { text: string } | { done: boolean } },
        { dispatch }
    ) => {
        await tasksAPI.updateTask(id, updatedTask);
        dispatch(fetchTasks());
        return { id, updatedTask };
    }
);

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: string, { dispatch }) => {
    await tasksAPI.deleteTask(id);
    dispatch(fetchTasks());
    return id;
});
