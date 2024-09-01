import PropTypes from 'prop-types';

export default function ListItem({ task, handleCompletion, data }) {
  return (
    <li onClick={() => handleCompletion(data.title, task.title)} className="list-item">
        {task.isCompleted && <span>️✅</span>}
        <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>{task.title}</span>
    </li>
  )
}

ListItem.propTypes = {
    task: PropTypes.object,
    data: PropTypes.object,
    handleCompletion: PropTypes.func,
};