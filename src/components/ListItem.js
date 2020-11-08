import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ id, children, onDeleteItem, onUpdateItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('');

  const handleItemDelete = () => {
    onDeleteItem(value, id);
  };

  const handleItemDoubleClick = () => {
    setIsEditing(true);
    setValue(children);
  };

  const handleInputBlur = () => {
    setValue('');
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    const isEnter = event.charCode === 13;

    if (isEnter) {
      onUpdateItem(value, id);
      setValue('');
      setIsEditing(false);
    }
  };

  return (
    <>
      {!isEditing ? (
        <li onDoubleClick={handleItemDoubleClick}>
          {children}
          <span role="img" aria-label="Delete" onClick={handleItemDelete}>
            ❌
          </span>
        </li>
      ) : (
        <input
          type="text"
          placeholder="Type a new name for the todo..."
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          onBlur={handleInputBlur}
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
