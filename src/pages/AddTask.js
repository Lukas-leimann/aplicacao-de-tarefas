import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ id: Date.now(), title, completed: false });
    navigate('/');
  };

  return (
    <div>
      <h1>Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddTask;
