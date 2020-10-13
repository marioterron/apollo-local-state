import * as ACTION_TYPES from './actionTypes';

const add = (value) => ({
  type: ACTION_TYPES.ADD,
  payload: value,
});

export { add };
