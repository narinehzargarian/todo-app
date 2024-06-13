import React, { useState } from "react";
import './TodoApp.css'

function TodoApp () {

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, {text: input, completed: false, note: ''}])
      setInput('')
    }
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) =>  i !== index)  
    setTasks(newTasks)
  }
  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const addNote = (index, content) => {
    const newTasks = [...tasks]
    newTasks[index].note = content
    setTasks(newTasks)
  }

  /* TODO: Add note to the task */
  /* TODO: Give priority (Move up/ down) */
  /* TODO: Hide it under the options */ 

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input" 
        placeholder="Add a new task..."
      />
      <button onClick={addTask} className="todo-button">Add Task</button>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <span
              className= {`todo-text ${task.completed? 'completed': ''}`}
              onClick={() => toggleTaskCompletion(index)}
            >
               {task.text}
            </span>
            <span className={`todo-note`}>
              {task.note}
            </span>
            <button className="todo-delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="todo-add-note-button" onClick={()=> addNote(index, "some notes")}>
              Add Notes
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default TodoApp;
