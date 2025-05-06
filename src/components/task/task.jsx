import PropTypes from 'prop-types'
import './task.css'

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
  )
}

Task.defaultProps = {
  onRemoveTask: () => {},
  onCompletedTask: () => {},
  onEditingTask: () => {},
}

Task.propTypes = {
  time: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemoveTask: PropTypes.func,
  onCompletedTask: PropTypes.func,
  onEditingTask: PropTypes.func,
  checked: PropTypes.bool,
}

export default Task
