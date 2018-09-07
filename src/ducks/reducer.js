import axios from "axios";

// 1.) INITIAL STATE

const initial_state = {
  posts: []
};

// 2.) CONST VARIABLES
const GET_POSTS = "GET_POSTS";
const ADD_POST = "ADD_POST";

// 3.) REDUCER FUNCTION
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case GET_POSTS + "_FULFILLED":
      return Object.assign({}, state, { posts: action.payload });
    case ADD_POST:
      return Object.assign({}, state, { posts: action.payload });
    default:
      return state;
  }
}

// 4.) ACTION CREATORS

export function getPosts() {
  let posts = axios.get("/api/posts").then(res => res.data);
  return {
    type: GET_POSTS,
    payload: posts
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  };
}
