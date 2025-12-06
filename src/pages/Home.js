import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { tasks, removeTask, toggleTask } = useContext(TaskContext);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <Link to="/add-task">➕ Adicionar Tarefa</Link>
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
    </div>
  );
};

export default Home;
