// App.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Charger les todos depuis les cookies au chargement de l'application
  useEffect(() => {
    const savedTodos = Cookies.get('todos');
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos); // Parse les données JSON
      if (parsedTodos.length > 0) {
        setTodos(parsedTodos);
      }
    }
  }, []);

  // Sauvegarder les todos dans les cookies à chaque modification
  useEffect(() => {
    Cookies.set('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text: text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <main>
        <h1>Todo List</h1>
        <h2>React App</h2>
        <TodoForm addTodo={addTodo} />
      </main>
      <section-two>
        <TodoList todos={todos} deleteTodo={deleteTodo} setTodos={setTodos} />
      </section-two>
    </div>
  );
}

export default App;
