import { ActionTypes } from "../constants/constants";
import axios from 'axios'

console.log('ACTIONS');
export const fetchData = () => {
  console.log('fetchData');
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data;
        dispatch(fetchSuccessful(data));
      })
      .catch((error) => {
        dispatch(fetchFailure(error.message));
      });
  };
};

export const fetchSuccessful = (data) => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload: data
});
export const fetchFailure = (data) => ({
  type: ActionTypes.FETCH_FAILURE,
  payload: data
});
export const addPost = (data) => ({
  type: ActionTypes.ADD_POST,
  payload: data
});
export const removePost = (data) => ({
  type: ActionTypes.REMOVE_POST,
  payload: data
});
export const addToMyPosts = (data) => ({
  type: ActionTypes.ADD_TO_MYPOSTS,
  payload: data
});
export const updatePost = (data) => ({
  type: ActionTypes.UPDATE_POST,
  payload: data
});
