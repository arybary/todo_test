import React, { useState } from 'react';
import { Task } from '../../model/task';
import TaskContainer from '../../containers/TaskContainer';
import s from './TaskList.module.scss';

interface TaskListProps {
    tasks: Task[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, status, error }) => {
    if (status === 'loading') {
        return <div className={s.spinner}></div>;
    }

    if (status === 'failed') {
        return <div className={s.spinner}>Error: {error}</div>;
    }

    return (
        <ul className={s.list}>
            {tasks.map((task) => (
                <TaskContainer key={task.id} {...task} />
            ))}
        </ul>
    );
};

export default TaskList;
