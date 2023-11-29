import axios from 'axios';
import { Task } from '../model/task';

const baseUrl = 'https://61cdc8267067f600179c5c46.mockapi.io/tasks';

export const createTask = async (taskData: Omit<Task, 'id'>): Promise<void> => {
    try {
        const response = await axios.post<Task>(baseUrl, taskData);
        if (!response.data) {
            throw new Error('HEXYSI');
        }
    } catch (error) {
        throw new Error('HEXYSI');
    }
};

export const fetchTasksList = async (): Promise<Task[]> => {
    try {
        const response = await axios.get<Task[]>(baseUrl);
        return response.data;
    } catch (error) {
        throw new Error('HEXYSI');
    }
};

export const updateTask = async (taskId: string, taskData: Partial<Task>): Promise<void> => {
    try {
        const response = await axios.put<Task>(`${baseUrl}/${+taskId}`, taskData);
        if (!response.data) {
            throw new Error('HEXYSI update');
        }
    } catch (error) {
        throw new Error('HEXYSI update');
    }
};

export const deleteTask = async (taskId: string): Promise<void> => {
    try {
        const response = await axios.delete(`${baseUrl}/${taskId}`);
        if (!response.data) {
            throw new Error('HEXYSI delete');
        }
    } catch (error) {
        throw new Error('HEXYSI update');
    }
};
