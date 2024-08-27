import React, { useState } from 'react';

const TodoList = function() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = function(index) {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? {t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const removeTask = function(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">To-Do List</h1>
      <div className="todo-list-input">
        <input
          type="text"
          className="todo-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-task-button" onClick={addTask}>Add Task</button>
      </div>
      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li key={index} className="todo-item">
            <span
              className={`todo-text ${t.completed ? 'completed' : ''}`}
              onClick={() => toggleTask(index)}>

              {index + 1}. {t.text}
            </span>
            <button className="remove-task-button" onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
