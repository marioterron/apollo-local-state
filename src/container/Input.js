import React from 'react';
import Input from '../components/Input';
import { add } from '../store/actions';

const InputContainer = ({ dispatch }) => {
  const handleUseReducerAdd = (value) => {
    dispatch(add(value));
  };

  return <Input onSubmit={handleUseReducerAdd} />;
};

export default InputContainer;
