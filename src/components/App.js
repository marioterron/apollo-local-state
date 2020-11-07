import React, { useReducer } from 'react';
import Input from '../container/Input';
import List from '../container/List';
import { initialState, reducer } from '../store/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Input dispatch={dispatch} />
      <List state={state} dispatch={dispatch} />
    </>
  );
};

export default App;
