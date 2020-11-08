import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    const isEnter = event.charCode === 13;

    if (isEnter) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Type something here..."
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
