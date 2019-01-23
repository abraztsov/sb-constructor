import { createAction } from 'redux-actions';
import axios from 'axios';


// const _postPoster = createAction('POST_POSTER', async poster => {
//   const newPoster = {
//     ...poster,
//     qnty: 1
//   };
//   const { data } = await axios.post(
//     `${process.env.REACT_APP_SERVER_DOMAIN_API}/poster`,
//     {
//       poster: newPoster
//     }
//   );
//   // console.log(data.poster);

//   return {
//     ...data.poster
//   };
// });

// export const postPoster = poster => dispatch => {
//   return dispatch(_postPoster(poster));
// };

// export const removePoster = createAction('REMOVE_POSTER', data => {
//   // changeCartInLocalState({
//   //   ...data.poster,
//   //   qnty: 1
//   // });
//   return data;
// });

// const _changeQnty = createAction('CHANGE_QNTY');
// export const changeQnty = data => async dispatch => {
//   dispatch(_changeQnty(data));

//   axios.post(`${process.env.REACT_APP_SERVER_DOMAIN_API}/poster/qnty`, {
//     _id: data._id,
//     qnty: data.value
//   });
// };

// export const clearCart = createAction('CLEAR_CART');
