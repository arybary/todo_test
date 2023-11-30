import './App.scss';
import CreateTaskFormContainer from './tasks/containers/CreateTaskFormContainer';
import PaginationContainer from './tasks/containers/PaginationContainer';
import TaskListContainer from './tasks/containers/TaskListContainer';

function App() {
  return (
    <div>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskFormContainer />
        <TaskListContainer />
        <PaginationContainer />
      </main>
    </div>
  );
}

export default App;
