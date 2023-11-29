import React, { useState } from 'react';
import classNames from 'classnames';
import s from './Task.module.scss';
import TaskForm from '../TaskForm/TaskForm';

interface TaskProps {
    done: boolean;
    updateTaskDone: () => void;
    updateTaskText: (text: string) => void;
    deleteTask: () => void;
    text: string;
}

const Task: React.FC<TaskProps> = ({ done, updateTaskDone, updateTaskText, deleteTask, text }) => {
    const [selectedTask, setSelectedTask] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTask(e.target.value);
    };
    return (
        <li className={classNames(s.listItem, { [s.listItem_done]: done })}>
            <input
                type="checkbox"
                className={s.listItem__checkbox}
                defaultChecked={done}
                onChange={updateTaskDone}
            />
            {selectedTask === '' ? (
                <span onClick={() => setSelectedTask(text)} className={s.listItem__text}>
                    {text}
                </span>
            ) : (
                <TaskForm
                    taskText={selectedTask}
                    onInputChange={handleInputChange}
                    onSubmit={() => updateTaskText(selectedTask)}
                    nameBtn={'Update Task'}
                />
            )}
            <button className={s.listItem__deleteBtn} onClick={deleteTask}></button>
        </li>
    );
};

export default Task;
