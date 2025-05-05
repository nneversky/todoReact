import { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    inputValue: '',
  };

  static defaultProps = {
    onAddTask: () => {},
  };

  static propTypes = {
    onAddTask: PropTypes.func,
  };

  handleChange = ({ target }) => {
    this.setState({
      inputValue: target.value,
    });
  };

  render() {
    const { onAddTask } = this.props;

    const handleKeyDown = ({ key }) => {
      if (key === 'Enter' && this.state.inputValue.trim().length !== 0) {
        onAddTask(this.state.inputValue.trim());
        this.setState({
          inputValue: '',
        });
      }
    };

    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={this.state.inputValue}
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => this.handleChange(e)}
      />
    );
  }
}
