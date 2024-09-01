import { useState } from 'react';
import './App.css'
import TaskCard from './components/TaskCard';
import CreateTaskModal from './components/CreateTaskModal';

// Function Component
function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [data, setData] = useState([

  ]);

  function handleInputCHange(e) {
    setTaskTitle(e.target.value)
  }

  function handleTaskCreate(e) {
    e.preventDefault();
    if (!taskTitle) return;
    const dataCopy = [...data];
    dataCopy.push({
      title: taskTitle,
      tasks: []
    })
    setData(dataCopy)
  }

  function handleCompletion(category, task) {
    const dataCopy = [...data];
    const selectedCategory = dataCopy.find((element) => element.title === category);
    if (selectedCategory) {
      let selectedSubTask = selectedCategory.tasks.find((element) => element.title === task);
      selectedSubTask.isCompleted = !selectedSubTask.isCompleted;
      console.log(selectedSubTask)
    }
    setData(dataCopy);
  }

  function handleAddNewTask(category, task) {
    const dataCopy = [...data];
    const selectedCategory = dataCopy.find((element) => element.title === category);
    selectedCategory.tasks.push({ title: task, isCompleted: false })
    setData(dataCopy);
  }

  return (<div>
    <CreateTaskModal open={open} setOpen={setOpen} createTask={(task) => handleAddNewTask(currentTask, task)} />
    <div className='create-task-form'>
      <input placeholder="Enter task here" onChange={handleInputCHange} />
      <button onClick={handleTaskCreate}>Save task</button>
    </div>
    <div className='tasks-listing-container'>
      {data.map((element, index) => {
        return <TaskCard createTaskModalCB={(category) => {
          setOpen(!open)
          setCurrentTask(category)
        }} key={`${element.title}-${index}`} data={element} handleAddNewTask={handleAddNewTask} handleCompletion={handleCompletion} />
      })}
    </div>
    </div>
  )
}

export default App;