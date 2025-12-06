import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, toggleTask, removeTask }) => (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
        <button onClick={() => toggleTask(task.id)}>✔</button>
        <button onClick={() => removeTask(task.id)}>🗑</button>
        <Link to={`/edit-task/${task.id}`}>✏️</Link>
      </li>
    ))}
  </ul>
);

export default TaskList;
