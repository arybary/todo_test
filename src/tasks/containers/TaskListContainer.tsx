import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchTasks } from '../thunks/tasks.thunks';
import { selectError, selectStatus, selectTasksView } from '../selector/tasks.selectors';
import TaskList from '../components/TaskList/TaskList';

const TaskListContainer: React.FC = () => {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector(selectTasksView);
	const status = useAppSelector(selectStatus);
	const error = useAppSelector(selectError);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchTasks());
		}
	}, [status, dispatch]);

	return (
		<>
			<TaskList tasks={tasks} status={status} error={error} />
		</>
	);
};

export default TaskListContainer;
