import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const { tasks, editTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const task = tasks.find(t => t.id === parseInt(id));
    if (task) setTitle(task.title);
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask({ id: parseInt(id), title, completed: false });
    navigate('/');
  };

  return (
    <div>
      <h1>Editar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditTask;
