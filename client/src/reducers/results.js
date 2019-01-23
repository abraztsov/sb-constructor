import { handleActions } from 'redux-actions';
import { removeItemFromArray, updateItemInArray } from './reducer.helpers.js';

const initialState = [];

export default handleActions(
  {
    // POST_POSTER_SUCCESS: (state, { payload }) => [...state, payload],
    // REMOVE_POSTER: (state, { payload }) =>
    //   removeItemFromArray(state, poster => poster.itemId === payload),
    // CHANGE_QNTY: (state, { payload }) =>
    //   updateItemInArray(
    //     state,
    //     poster => poster.itemId === payload.itemId,
    //     poster => ({
    //       ...poster,
    //       qnty:
    //         payload.value > 99
    //           ? 99
    //           : !payload.value || payload.value < 1
    //             ? 1
    //             : payload.value
    //     })
    //   ),
    // CLEAR_CART: () => []
  },
  initialState
);
