import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import Input from './container/input';
import List from './container/list';
import { initialState, reducer } from './store/reducer';
import './index.css';

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Input dispatch={dispatch} />
      <List state={state} dispatch={dispatch} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
