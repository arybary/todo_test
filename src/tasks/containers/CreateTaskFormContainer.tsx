import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import TaskForm from '../components/TaskForm/TaskForm';
import { createTask, updateTask } from '../thunk';


const CreateTaskFormContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const [taskText, setTaskText] = useState('');
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value);
    };

    const handleSubmit = () => {
        if (isEditMode && selectedTaskId !== null) {
            dispatch(updateTask({ id: selectedTaskId, updatedTask: { text: taskText } }));
            setIsEditMode(false);
            setSelectedTaskId(null);
        } else {
            dispatch(createTask(taskText));
        }

        setTaskText('');
    };

    const handleTaskClick = (taskId: string, taskText: string) => {
        setTaskText(taskText);
        setSelectedTaskId(taskId);
        setIsEditMode(true);
    };

    return (
        <TaskForm
            taskText={taskText}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            nameBtn={"Add TASK"}
        />
    );
};

export default CreateTaskFormContainer;


