import * as ACTION_TYPES from './actionTypes';

const add = (payload) => ({
  type: ACTION_TYPES.ADD,
  payload: { id: new Date().getTime().toString(), value: payload.value },
});

const update = (payload) => ({
  type: ACTION_TYPES.UPDATE,
  payload,
});

const remove = (payload) => ({
  type: ACTION_TYPES.REMOVE,
  payload,
});

export { add, update, remove };
