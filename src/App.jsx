import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo, fetchTodos } from './store/todoSlice';

import './App.css'
import InputField from './components/InputField';
import TodoList from './components/TodoList';

function App() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])
  
  return (
    <div className='App'>
      <InputField 
        text={text}
        handleInput={setText} 
        handleSubmit={addTask}
      />

      <TodoList />
    </div>
  );
};

export default App;