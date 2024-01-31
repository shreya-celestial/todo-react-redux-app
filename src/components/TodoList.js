import { useSelector, useDispatch } from 'react-redux'
import actionTypes from '../store/typeConstants';

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({
      type: actionTypes.delTodo,
      payload: id
    })
  }

  return (
    <div className='todolist'>
      <h2>TO-DO LIST</h2>
      {todos.length > 0 ? <ol>{
        todos.map((todo) => (
          <div key={todo.id}>
            <li>{todo.todo}</li>
            <button onClick={handleDelete.bind(null, todo.id)}>Delete</button>
          </div>
        ))
      }</ol> : ''}
    </div>
  );
}

export default TodoList;