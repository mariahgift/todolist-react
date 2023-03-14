import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [checkTodos, setCheckedTodos] = useState({});
  const [showCheckedTodos, setShowCheckedTodos] = useState(false);

  const handleAddTodo = () => {
    if (!newTodo) return;
    setTodos([...todos, newTodo]);
    setCheckedTodos({...checkTodos, [newTodo]: false});
    setNewTodo('');
  }

  const handleToggleCheck = (todo) => {
    setCheckedTodos({...checkTodos, [todo]: !checkTodos[todo]});
  }

  const handleShowCheckedTodos = () => {
    setShowCheckedTodos(true);
  };

  const handleHideCheckedTodos = () => {
    setShowCheckedTodos(false);
  };

  const checked = Object.keys(checkTodos).filter(
    (todo) => checkTodos[todo] === true
  );

  return (
    <div>
      <h1>Todo List</h1>

      {/* show to do list */}
      <ul>
        {todos.map((todo, i) => 
        <li key={i}>
          <input 
          type="checkbox"
          checked={checkTodos[todo]}
          onChange={() => handleToggleCheck(todo)}
          />
          {todo}
          </li>)}
      </ul>

    {/* add to do in the list */}
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

  {/* show checked todos */}
  <br/>
  <button onClick={handleShowCheckedTodos}>Show Checked Todos</button>
      {showCheckedTodos && (
        <div>
          <h2>Done Tasks</h2>
          <ul>
            {checked.map((todo, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={checkTodos[todo]}
                  onChange={() => handleToggleCheck(todo)}
                />
                <s>{todo}</s>
              </li>
            ))}
          </ul>
          <button onClick={handleHideCheckedTodos}>Hide Checked Todos</button>
        </div>
      )}
    </div>
  );
}

export default TodoList;