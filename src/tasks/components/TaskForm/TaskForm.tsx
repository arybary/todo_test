import React from 'react';
import s from './TaskForm.module.scss';

interface TaskFormProps {
    taskText: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
    nameBtn: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ taskText, onInputChange, onSubmit, nameBtn }) => {
    return (
        <div className={s.createTask}>
            <input
                className={s.createTask__input}
                type="text"
                value={taskText}
                onChange={onInputChange}
            />
            <button
                className={`${s.btn} ${s.createTask__btn}`}
                onClick={onSubmit}
                disabled={taskText === ''}
            >
                {nameBtn}
            </button>
        </div>
    );
};

export default TaskForm;
