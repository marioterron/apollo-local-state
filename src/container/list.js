import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import List from '../components/list';
import { deleteTodo, editTodo } from '../operations/mutations';
import GET_ALL_TODOS from '../operations/queries/getAllTodos';

const ListContainer = ({ state, dispatch }) => {
  const { loading, data, error } = useQuery(GET_ALL_TODOS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;
  if (!data) return <div>No data!</div>;

  return <List todos={data.todos} onDeleteItem={deleteTodo} onUpdateItem={editTodo} />;
};

ListContainer.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ListContainer;
