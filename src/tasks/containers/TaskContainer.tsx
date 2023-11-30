import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteTask, updateTask } from '../thunks/tasks.thunks';
import Task from '../components/Task/Task';

interface TaskProps {
    id: string;
    done: boolean;
    text: string;
}

const TaskContainer: React.FC<TaskProps> = ({ id, done, text }) => {
    const dispatch = useAppDispatch();

    const updateTaskText = (text: string) => {
        const updatedTask = { text };
        dispatch(updateTask({ id, updatedTask }));
    };

    const updateTaskDone = () => {
        const updatedTask = { done: !done };
        dispatch(updateTask({ id, updatedTask }));
    };

    return (
        <Task
            done={done}
            updateTaskDone={updateTaskDone}
            updateTaskText={updateTaskText}
            deleteTask={() => dispatch(deleteTask(id))}
            text={text}
        />
    );
};

export default TaskContainer;
