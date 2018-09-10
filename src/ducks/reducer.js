import axios from "axios";

// 1.) INITIAL STATE

const initial_state = {
  posts: [],
  post:{}
};

// 2.) CONST VARIABLES
const GET_POSTS = "GET_POSTS";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

// 3.) REDUCER FUNCTION
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case GET_POSTS + "_FULFILLED":
      return Object.assign({}, state, { posts: action.payload });
    case ADD_POST:
      return Object.assign({}, state, { posts: action.payload });
    case DELETE_POST + "_FULLFILLED":
      return Object.assign({}, state, { posts: action.payload });
    default:
      return state;
  }
}

// 4.) ACTION CREATORS

export function getPosts() {
  let postt = axios.get("/api/posts").then(res => res.data);
  return {
    type: GET_POSTS,
    payload: postt
  };
}

export function addPost(postt) {
  return {
    type: ADD_POST,
    payload: postt
  };
}

export function deletePost(id) {
  const postt = axios.delete(`/api/posts/${id}`).then(res => res.data);
  return {
    type: DELETE_POST,
    payload: postt
  };
}
