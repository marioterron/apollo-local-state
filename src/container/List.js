import React from 'react';
import { update } from '../store/actions';
import List from '../components/List';

const ListContainer = ({ state, dispatch }) => {
  const handleUseReducerUpdate = (value, id) => {
    dispatch(update({ id, value }));
  };

  return <List todos={state} onUpdateItem={handleUseReducerUpdate} />;
};

export default ListContainer;
