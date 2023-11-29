import React, { useState } from 'react';
import { Task } from '../model/task';
import TaskContainer from '../containers/TaskContainer';

interface TaskListProps {
    tasks: Task[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, status, error }) => {
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <TaskContainer key={task.id} {...task} />
            ))}
        </ul>
    );
};

export default TaskList;
