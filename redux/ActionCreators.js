import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading());

  return fetch(baseUrl + "posts")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((posts) => dispatch(addPosts(posts)))
    .catch((error) => dispatch(postsFailed(error.message)));
};

export const postsLoading = () => ({
  type: ActionTypes.POSTS_LOADING,
});

export const postsFailed = (errMess) => ({
  type: ActionTypes.POSTS_FAILED,
  payload: errMess,
});

export const addPosts = (posts) => ({
  type: ActionTypes.ADD_POSTS,
  payload: posts,
});
