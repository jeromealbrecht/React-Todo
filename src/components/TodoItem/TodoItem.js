// TodoItem.js
import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, deleteTodo }) {
    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <li>
            {todo.text}
            <button className='itemButton' onClick={handleDelete}>Delete</button>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }),
    deleteTodo: PropTypes.func.isRequired
};

export default TodoItem;