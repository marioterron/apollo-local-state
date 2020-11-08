import React from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { add } from '../store/actions';

const InputContainer = ({ dispatch }) => {
  const handleUseReducerAdd = (value) => {
    dispatch(add({ value }));
  };

  return <Input onSubmit={handleUseReducerAdd} />;
};

InputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default InputContainer;
