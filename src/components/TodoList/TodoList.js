import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function TodoList({ todos, deleteTodo }) {
  const listRef = useRef(null);

  return (
    <ul ref={listRef}>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
