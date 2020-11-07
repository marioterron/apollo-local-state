import React from 'react';
import ListItem from './ListItem';

const List = ({ todos, onUpdateItem }) => {
  return (
    <ul>
      {todos &&
        todos.map(({ id, value }) => (
          <ListItem key={id} id={id} onUpdateItem={onUpdateItem}>
            {value}
          </ListItem>
        ))}
    </ul>
  );
};
export default List;
