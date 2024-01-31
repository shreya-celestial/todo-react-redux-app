import { useDispatch, useSelector } from 'react-redux'
import actionTypes from '../store/typeConstants';

const NewTodo = () => {
  const newId = useSelector(state => state.id)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.elements.todo.value;
    if (todo) {
      dispatch({
        type: actionTypes.newTodo,
        payload: {
          id: newId,
          todo,
        }
      })
      dispatch({ type: actionTypes.getId })
      e.target.elements.todo.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" placeholder="Add New Todo" />
      <button style={{ display: 'none' }}></button>
    </form>
  );
}

export default NewTodo;