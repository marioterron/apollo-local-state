import * as ACTION_TYPES from './actionTypes';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return [...state, action.payload];
    default:
      throw new Error();
  }
};

export { initialState, reducer };
