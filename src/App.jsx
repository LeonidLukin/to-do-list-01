import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewTodo, fetchTodos } from './store/todoSlice';

import './App.css'
import InputField from './components/InputField';
import TodoList from './components/TodoList';

function App() {
  const [text, setText] = useState('');
  const { status, error } = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text))
      setText('')
    }
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])
  
  return (
    <div className='App'>
      <InputField 
        text={text}
        handleInput={setText} 
        handleAction={handleAction}
      />

      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>We have an error: {error}</h2>}

      <TodoList />
    </div>
  );
};

export default App;