// import api from '../utils/api';
// import { setAlert } from './alert';
// import {
//   GET_POSTS,
//   POST_ERROR,
//   UPDATE_LIKES,
//   DELETE_POST,
//   ADD_POST,
//   GET_POST,
//   ADD_COMMENT,
//   REMOVE_COMMENT
// } from './types';

// /*
//   NOTE: we don't need a config object for axios as the
//  default headers in axios are already Content-Type: application/json
//  also axios stringifies and parses JSON for you, so no need for 
//  JSON.stringify or JSON.parse
// */

// // Get posts
// export const getPosts = () => async (dispatch) => {
//   try {
//     const res = await api.get('/logement');

//     dispatch({
//       type: GET_POSTS,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Add like
// export const addLike = (id) => async (dispatch) => {
//   try {
//     const res = await api.put(`/logement/like/${id}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data }
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Remove like
// export const removeLike = (id) => async (dispatch) => {
//   try {
//     const res = await api.put(`/logement/unlike/${id}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data }
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Delete post
// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.delete(`/logement/${id}`);

//     dispatch({
//       type: DELETE_POST,
//       payload: id
//     });

//     dispatch(setAlert('Offre retirée', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Add post
// export const addPost = (formData) => async (dispatch) => {
//   try {
//     const res = await api.post('/logement', formData);

//     dispatch({
//       type: ADD_POST,
//       payload: res.data
//     });

//     dispatch(setAlert('Offre Publiée', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//     dispatch(setAlert("Votre compte ne peut pas publier des offres", 'success'));
//   }
// };

// // Get post
// export const getPost = (id) => async (dispatch) => {
//   try {
//     const res = await api.get(`/logement/${id}`);

//     dispatch({
//       type: GET_POST,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Add comment
// export const addComment = (postId, formData) => async (dispatch) => {
//   try {
//     const res = await api.post(`/logement/comment/${postId}`, formData);

//     dispatch({
//       type: ADD_COMMENT,
//       payload: res.data
//     });

//     dispatch(setAlert('Commentaire Publié', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Delete comment
// export const deleteComment = (postId, commentId) => async (dispatch) => {
//   try {
//     await api.delete(`/logement/comment/${postId}/${commentId}`);

//     dispatch({
//       type: REMOVE_COMMENT,
//       payload: commentId
//     });

//     dispatch(setAlert('Commentaire Supprimé', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
