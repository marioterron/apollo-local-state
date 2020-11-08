import React from 'react';
import PropTypes from 'prop-types';
import { remove, update } from '../store/actions';
import List from '../components/List';

const ListContainer = ({ state, dispatch }) => {
  const handleUseReducerRemove = (value, id) => {
    dispatch(remove({ id, value }));
  };

  const handleUseReducerUpdate = (value, id) => {
    dispatch(update({ id, value }));
  };

  return <List todos={state} onDeleteItem={handleUseReducerRemove} onUpdateItem={handleUseReducerUpdate} />;
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
