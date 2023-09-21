import './App.css';
import React, {useState} from "react";

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

// Add a new task
  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };


  const lookIfCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  
  return (
    <div className="todo-app">
      <h1 className="header">Todo App</h1>
      <div className="content">
        <div className="todo">
          <div className="field-and-button">
          <input type="text" value={taskText} onChange={(e) =>
          setTaskText((e.target.value))} placeholder="enter your task here" />
          <button className="todo-adder" type="submit" onClick={addTask}>
            Add
          </button>
          </div>
          <ul> <h2>Todo:</h2>
            {tasks.map((task, index) => (
                <li key={index} className={task.completed ? 'completed' : ''}
                    onClick={() => lookIfCompleted(index)}>{task.text}</li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default App;
