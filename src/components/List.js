import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({ todos, onDeleteItem, onUpdateItem }) => (
  <ul>
    {todos &&
      todos.map(({ id, value }) => (
        <ListItem key={id} id={id} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem}>
          {value}
        </ListItem>
      ))}
  </ul>
);

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
};

export default List;
