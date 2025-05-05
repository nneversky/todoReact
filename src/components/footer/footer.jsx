import TaskFilter from '../task-filter';
import PropTypes from 'prop-types';
import './footer.css';

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
