import { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

export default class TaskList extends Component {
  state = {
    textTask: '',
  }

  static defaultProps = {
    onStateTaskFilter: () => {},
    onRemoveTask: () => {},
    onCompletedTask: () => {},
    onEditingTask: () => {},
    onHandleEditingTaskInput: () => {},
  }

  static propTypes = {
    onStateTaskFilter: PropTypes.func,
    onRemoveTask: PropTypes.func,
    onCompletedTask: PropTypes.func,
    onEditingTask: PropTypes.func,
    onHandleEditingTaskInput: PropTypes.func,
    onTaskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  handleChange = ({ target }) => {
    return this.setState({
      textTask: target.value,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.onTaskList !== this.props.onTaskList) {
      this.props.onTaskList.forEach((value) => {
        if (value.editing) {
          this.setState({
            textTask: value.text,
          })
        }
      })
    }
  }

  render() {
    const { onStateTaskFilter, onTaskList, onRemoveTask, onCompletedTask, onEditingTask, onHandleEditingTaskInput } =
      this.props

    const handleKeyDown = ({ keyCode }) => {
      if (keyCode === 13) {
        const newTasks = onTaskList.map((value) => {
          if (value.editing) {
            value.text = this.state.textTask.trim()
            value.editing = false
          }
          return value
        })
        onHandleEditingTaskInput(newTasks)
      }
    }

    const showInput = (editing) => {
      if (!editing) return null
      return (
        <input
          type="text"
          className="edit"
          onKeyDown={(e) => handleKeyDown(e)}
          value={this.state.textTask}
          onChange={(e) => this.handleChange(e)}
        />
      )
    }

    const renderTask = (text, id, completed, editing, time) => {
      if (onStateTaskFilter === 'active' && completed) {
        return null
      }

      if (onStateTaskFilter === 'completed' && !completed) {
        return null
      }

      return (
        <li className={completed ? 'completed' : editing ? 'editing' : null} key={id}>
          <Task
            checked={completed ? true : false}
            time={time}
            taskText={text}
            id={id}
            onRemoveTask={onRemoveTask}
            onCompletedTask={onCompletedTask}
            onEditingTask={onEditingTask}
          />
          {showInput(editing)}
        </li>
      )
    }

    return (
      <ul className="todo-list">
        {onTaskList.map((value) => {
          const { text, id, completed, editing, time } = value
          return renderTask(text, id, completed, editing, time)
        })}
      </ul>
    )
  }
}
