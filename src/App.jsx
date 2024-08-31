import './App.css'

// Function Component
function App() {
  const data = [
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
  ];
  return (<div>
    {data.map((element, index) => {
      return <div key={index}>
      <h3>{element.title}</h3>
      <ul>
          {
            element.tasks.map((item, index) => <li key={index} style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.title}</li>)
          }
      </ul>
      </div>
    })}
    </div>
  )
}

export default App;