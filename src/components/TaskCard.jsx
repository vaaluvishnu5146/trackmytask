import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { Button } from 'reactstrap';

export default function TaskCard(props = {}) {
  const { data, createTaskModalCB } = props;
  return (
    <div className='task-card'>
      <div className='task-card-header'>
        <h3>{data.title}</h3>
        <div>
        <Button
          color="primary"
          onClick={() => createTaskModalCB(data.title)}
        >
        Add
        </Button>
      </div>
      </div>
      <ul>
          {
            data.tasks.map((item, index) => <ListItem key={`${item.title}-${index}`} task={item} {...props} />)
          }
      </ul>
      </div>
  )
}

TaskCard.propTypes = {
    data: PropTypes.object,
    createTaskModalCB: PropTypes.func,
    handleAddNewTask: PropTypes.func,
};