import React from 'react';

const List = ({ todos }) => <ul>{!!todos.length && todos.map((t) => <li>{t}</li>)}</ul>;

export default List;
