import React from 'react';
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

export default ListContainer;
