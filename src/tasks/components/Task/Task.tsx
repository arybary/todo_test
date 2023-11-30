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
                <span className={s.listItem__text}>{text}</span>
            ) : (
                <TaskForm
                    taskText={selectedTask}
                    onInputChange={handleInputChange}
                    onSubmit={() => updateTaskText(selectedTask)}
                        nameBtn={'update'}
                />
            )}

            <div className={s.listItemBtns}>
                {selectedTask === '' && (
                    <button
                        className={s.listItem__edit}
                        onClick={() => setSelectedTask(text)}
                        disabled={done}
                    >
                        edit
                    </button>
                )}
                <button className={s.listItem__delete} onClick={deleteTask}>
                    x
                </button>
            </div>
        </li>
    );
};

export default Task;
