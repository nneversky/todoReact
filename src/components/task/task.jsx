import './task.css';

const Task = ({ time, taskText, id, onRemoveTask, onCompletedTask, onEditingTask }) => {
  return (
    <div className="view">
      <input className="toggle" onClick={() => onCompletedTask(id)} type="checkbox" />
      <label>
        <span className="description">{taskText}</span>
        <span className="created">{time.timeDistanceToNow}</span>
      </label>
      <button className="icon icon-edit" onClick={() => onEditingTask(id)}></button>
      <button className="icon icon-destroy" onClick={() => onRemoveTask(id)}></button>
    </div>
  );
};

export default Task;
