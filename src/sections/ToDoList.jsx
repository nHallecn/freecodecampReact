import React, { useState } from 'react'

const ToDoList = () => {

  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);

  function addTask(){
    if(input.trim()==='') return;

    const newTask = {
      id: Date.now(),
      text: input
    };

    setTask([...task, newTask]);
    setInput('');
  }

  function deleteTask(id){
    const updateTask = task.filter(t => t.id !== id);
    setTask(updateTask)
  }

  return (
    <div>
      <h1>To do App</h1>
      <input 
        type='text'
        onChange={(e)=>setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {task.map((t)=>(
          <li key={t.id}>
            {t.text}
            <button onClick={()=>deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList