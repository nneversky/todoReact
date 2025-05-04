import { Component } from 'react';
import TaskList from '../task-list';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';
import { formatDistanceToNow } from 'date-fns';
import './app.css';

export default class App extends Component {
  state = {
    tasks: [],
    stateTaskFilter: 'all',
  };

  timeInterval = setInterval(() => {
    const newTasks = this.state.tasks.map((task) => ({
      ...task,
      time: {
        timeCreate: task.time.timeCreate,
        timeDistanceToNow: formatDistanceToNow(task.time.timeCreate, {
          includeSeconds: true,
        }),
      },
    }));
    return this.setState({
      tasks: newTasks,
    });
  }, 10000);

  toggleStateTaskFilter = (state) => {
    this.setState({
      stateTaskFilter: state,
    });
  };

  handleAddTask = (task) => {
    const newTasks = {
      text: task,
      id: new Date().toISOString(),
      completed: false,
      editing: false,
      time: { timeCreate: new Date(), timeDistanceToNow: formatDistanceToNow(new Date(), { includeSeconds: true }) },
    };
    return this.setState({
      tasks: [...this.state.tasks, newTasks],
    });
  };

  handleRemoveTask = (idTask) => {
    const newTasks = this.state.tasks.filter((value) => value.id !== idTask);
    return this.setState({
      tasks: newTasks,
    });
  };

  handleEditingTask = (idTask) => {
    const newTasks = this.state.tasks.map((value) => {
      if (value.id === idTask && !value.completed) {
        value.editing = !value.editing;
      }
      return value;
    });
    return this.setState({
      tasks: newTasks,
    });
  };

  handleEditingTaskInput = (newTasks) => {
    return this.setState({
      tasks: newTasks,
    });
  };

  handleCompletedTask = (idTask) => {
    const newTasks = this.state.tasks.map((value) => {
      if (value.id === idTask) {
        value.completed = !value.completed;
      }
      return value;
    });

    return this.setState({
      tasks: newTasks,
    });
  };

  showCountItems = () => {
    let count = 0;
    this.state.tasks.forEach((value) => {
      if (!value.completed) count += 1;
    });
    return count;
  };

  clearCompletedTask = () => {
    const newTasks = this.state.tasks.filter((value) => !value.completed);

    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>{'My todos)'}</h1>
          <NewTaskForm onAddTask={this.handleAddTask} />
        </header>
        <section className="main">
          <TaskList
            onStateTaskFilter={this.state.stateTaskFilter}
            onTaskList={this.state.tasks}
            onRemoveTask={this.handleRemoveTask}
            onCompletedTask={this.handleCompletedTask}
            onEditingTask={this.handleEditingTask}
            onHandleEditingTaskInput={this.handleEditingTaskInput}
          />
          <Footer
            onToggleStateTaskFilter={this.toggleStateTaskFilter}
            onShowCountItems={this.showCountItems()}
            onClearCompletedTask={this.clearCompletedTask}
          />
        </section>
      </div>
    );
  }
}
