// TodoForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='toDoForm'>
            <label htmlFor="todo">Add a todo:</label>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Enter a todo..."
            />
            <button className='itemToDo' type="submit">Add Todo</button>
        </div>
    </form>
  );
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
