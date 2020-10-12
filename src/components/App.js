import React, { useState } from 'react';
import Input from './Input';
import List from './List';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Maybe this can be refactored to use a reducer instead
  const saveTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <Input onSubmit={saveTodo} />
      <List todos={todos} />
    </>
  );
};

export default App;
