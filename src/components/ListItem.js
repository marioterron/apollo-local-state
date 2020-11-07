import React, { useState } from 'react';

const ListItem = ({ id, children, onUpdateItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('');

  const handleDoubleClick = () => {
    setIsEditing(true);
    setValue(children);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    const isEnter = event.charCode === 13;

    if (isEnter) {
      onUpdateItem(value, id);
      setValue('');
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    setValue('');
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing ? (
        <li onDoubleClick={handleDoubleClick}>{children}</li>
      ) : (
        <input
          type="text"
          placeholder="Type a new name for the todo..."
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
        />
      )}
    </>
  );
};

export default ListItem;
