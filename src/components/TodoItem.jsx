import { removeTodo, toggleTodoComplete } from '../store/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch()

    return (
    <li>
        <input 
            type='checkbox' 
            checked={completed} 
            onChange={() => dispatch(toggleTodoComplete({id}))}
        />
        <span>{title}</span>
        <span className='delete' onClick={()=> dispatch(removeTodo({id}))}>&times;</span>
    </li>
  )
}

export default TodoItem