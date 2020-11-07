import * as ACTION_TYPES from './actionTypes';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return [...state, action.payload];
    case ACTION_TYPES.UPDATE:
      return [
        ...state.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return {
            id: item.id,
            value: action.payload.value,
          };
        }),
      ];
    default:
      throw new Error();
  }
};

export { initialState, reducer };
