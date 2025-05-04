import TaskFilter from '../task-filter';
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

export default Footer;
