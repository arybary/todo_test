import './App.scss';
import CreateTaskFormContainer from './tasks/containers/CreateTaskFormContainer';
import PaginationContainer from './tasks/containers/PaginationContainer';
import TaskListContainer from './tasks/containers/TaskListContainer';

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Todo List</h1>
      </header>
      <main className="main">
        <CreateTaskFormContainer />
        <TaskListContainer />
        <PaginationContainer />
      </main>
    </div>
  );
}

export default App;
