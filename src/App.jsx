import { useState } from 'react';
import './App.css'
import TaskCard from './components/TaskCard';

// Function Component
function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [data, setData] = useState([
    {
      title: "Task 1",
      tasks: [
        {title: "Get up at 5AM", isCompleted: false},
        {title: "Do workouts", isCompleted: false},
        {title: "Eat healthy breakfast", isCompleted: false},
      ]
    },
    {
      title: "Task 2",
      tasks: [
        {title: "Got to college", isCompleted: false},
        {title: "Attend lectures", isCompleted: true},
        {title: "Collect book from library", isCompleted: false},
      ]
    }
  ]);

  // useEffect(() => {
  //   document.addEventListener('click', () => {
  //     console.log('Clicked')
  //   })
  // }, []);

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

  function handleAddNewTask(category) {
    const dataCopy = [...data];
    const selectedCategory = dataCopy.find((element) => element.title === category);
    selectedCategory.tasks.push({ title: "Dummy task", isCompleted: false })
    setData(dataCopy);
  }

  return (<div>
    <div className='create-task-form'>
    <input placeholder="Enter task here" onChange={handleInputCHange} />
    <button onClick={handleTaskCreate}>Save task</button>
    </div>
    <div className='tasks-listing-container'>
      {data.map((element, index) => {
        return <TaskCard key={`${element.title}-${index}`} data={element} handleAddNewTask={handleAddNewTask} handleCompletion={handleCompletion} />
      })}
    </div>
    </div>
  )
}

export default App;