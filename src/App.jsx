import { useState } from 'react';
import './App.css'

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

  return (<div>
    <input placeholder="Enter task here" onChange={handleInputCHange} />
    <button onClick={handleTaskCreate}>Save task</button>
    {data.map((element, index) => {
      return <div key={index}>
      <h3>{element.title}</h3>
      <ul>
          {
            element.tasks.map((item, index) => <li onClick={() => handleCompletion(element.title, item.title)} className="list-item" key={index} style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.title}</li>)
          }
      </ul>
      </div>
    })}
    </div>
  )
}

export default App;