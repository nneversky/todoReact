import './task.css';

const Task = ({ time, taskText, id, onRemoveTask, onCompletedTask, onEditingTask, checked }) => {
  return (
    <div className="view">
      <input id={id} className="toggle" onChange={() => onCompletedTask(id)} checked={checked} type="checkbox" />
      <label htmlFor={id}>
        <span className="description">{taskText}</span>
        <span className="created">{time.timeDistanceToNow}</span>
      </label>
      <button className="icon icon-edit" onClick={() => onEditingTask(id)}></button>
      <button className="icon icon-destroy" onClick={() => onRemoveTask(id)}></button>
    </div>
  );
};

export default Task;
