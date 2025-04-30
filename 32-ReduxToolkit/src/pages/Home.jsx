import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
} from '../redux/features/TodoSlice';
import './Home.css'

const Home = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);  
  const [editText, setEditText] = useState('');

  
  useEffect(() => {
    if (editId !== null) {
      const todoToEdit = todos.find(todo => todo.id === editId);
      setText(todoToEdit.text);  
    }
  }, [editId, todos]);

  const handleAdd = () => {
    if (text) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleUpdate = () => {
    if (text) {
      dispatch(updateTodo({ id: editId, newText: text }));
      setEditId(null);  
      setText('');  
    }
  };

  return (
    <div className="todo-container">
  <h1>Todo App</h1>
  <div className="input-container">
    <input
    className='input_todo'
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder='Yeni todo ...'
    />
    <button onClick={editId ? handleUpdate : handleAdd} style={{marginLeft:'10px'}}>
      {editId ? 'Yadda saxla' : 'Əlavə et'}
    </button>
    <button onClick={() => dispatch(deleteAllTodos())} style={{marginLeft:'10px'}}>Hamısını sil</button>
  </div>

  <ul>
  {todos.map(todo => (
    <li key={todo.id}>
      <div className="todo-item">
        <span>{todo.text}</span>
        <div className="todo-actions">
          <button onClick={() => {
            setEditId(todo.id);
            setText(todo.text); 
          }}>
            Redaktə et
          </button>
          <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ marginLeft: '10px' }}>
            Sil
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>
</div>
  );
};

export default Home;
