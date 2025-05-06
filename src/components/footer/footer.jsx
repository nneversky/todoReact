import TaskFilter from '../task-filter';
import './footer.css';

import PropTypes from 'prop-types';

const Footer = ({ onToggleStateTaskFilter, onShowCountItems, onClearCompletedTask }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{`${onShowCountItems} items left`}</span>
      <TaskFilter onToggleStateTaskFilter={onToggleStateTaskFilter} />
      <button onClick={() => onClearCompletedTask()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  onToggleStateTaskFilter: () => {},
  onShowCountItems: () => {},
  onClearCompletedTask: () => {},
};

Footer.propTypes = {
  onToggleStateTaskFilter: PropTypes.func,
  onShowCountItems: PropTypes.func,
  onClearCompletedTask: PropTypes.func,
};

export default Footer;
