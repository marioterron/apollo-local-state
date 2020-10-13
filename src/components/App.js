import React, { useReducer } from 'react';
import Input from '../container/Input';
import List from './List';
import { initialState, reducer } from '../store/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Input dispatch={dispatch} />
      <List todos={state} />
    </>
  );
};

export default App;
