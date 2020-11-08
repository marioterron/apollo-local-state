import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ id, children, onDeleteItem, onUpdateItem }) => {
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

  const handleDelete = () => {
    onDeleteItem(value, id);
  };

  return (
    <>
      {!isEditing ? (
        <li onDoubleClick={handleDoubleClick}>
          {children}
          <span role="img" aria-label="Delete" onClick={handleDelete}>
            ❌
          </span>
        </li>
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

ListItem.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
};

export default ListItem;
