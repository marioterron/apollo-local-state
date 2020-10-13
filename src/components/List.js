import React from 'react';

const List = ({ todos }) => (
  <ul>{!!todos.length && todos.map((todo, index) => <li key={new Date().getTime().toString() + index}>{todo}</li>)}</ul>
);

export default List;
