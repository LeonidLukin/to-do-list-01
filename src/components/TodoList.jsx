import TodoItem from "./TodoItem";

const TodoList = ({todos,completed, removeTodo, toggleTodoComplete}) => {
  return (
    <ul>
        {todos.map(todo => <TodoItem  key={todo.id} {...todo} completed={completed} removeTodo={removeTodo} toggleTodoComplete={toggleTodoComplete} {...todos}/>)}
    </ul>
  )
};

export default TodoList;