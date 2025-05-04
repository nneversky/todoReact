import { Component } from 'react';
import './task-filter.css';

export default class TaskFilter extends Component {
  state = {
    classButtonFilter: 'filters__button--all',
  };

  toggleClassFilter = (className) => {
    this.props.onToggleStateTaskFilter(className);
    this.setState({
      classButtonFilter: `filters__button--${className}`,
    });
  };

  render() {
    const { classButtonFilter } = this.state;

    const toggleClassName = (className) => {
      if (`filters__button--${className}` === classButtonFilter) {
        return (className = `filters__button--${className} selected`);
      }
      return `filters__button--${className}`;
    };

    return (
      <ul className="filters">
        <li>
          <button onClick={() => this.toggleClassFilter('all')} className={toggleClassName('all')}>
            All
          </button>
        </li>
        <li>
          <button onClick={() => this.toggleClassFilter('active')} className={toggleClassName('active')}>
            Active
          </button>
        </li>
        <li>
          <button onClick={() => this.toggleClassFilter('completed')} className={toggleClassName('completed')}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
