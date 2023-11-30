import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import TaskForm from '../components/TaskForm/TaskForm';
import { createTask } from '../thunks/tasks.thunks';

const CreateTaskFormContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const [taskText, setTaskText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(createTask(taskText));

        setTaskText('');
    };

    return (
        <TaskForm
            taskText={taskText}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            nameBtn={'ADD'}
        />
    );
};

export default CreateTaskFormContainer;
