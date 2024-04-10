import { ActionTypes } from "../constants/constants";

const initialState = {
  myPosts: [],
  isLoading: true
};

const addRemovePostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_MYPOSTS:
      return {
        ...state,
        myPosts: [...state.myPosts, payload],
        isLoading: false
      };
    case ActionTypes.ADD_POST:
      return {
        ...state,
        isLoading: false,
        myPosts: [...state.myPosts, payload]
      };
    case ActionTypes.REMOVE_POST:
      // console.log('data:',state.posts.splice(state.posts.findIndex(e=>e.id===payload.id),1));
      // let arr = []
      // let filterArr = []
      // console.log('payload:',payload);
      // for (let index = 0; index < state.posts.length; index++) {
      //  if(state.posts[index].id===payload.id){
      //    filterArr.push(state.posts[index])
      //  }  else{
      //    arr.push(state.posts[index])
      //  }
      // }

      const data = state.myPosts;
      const val = data.findIndex((e) => e.id === payload.id);
      data.splice(val, 1);
      return {
        ...state,
        myPosts: data
      };
    case ActionTypes.UPDATE_POST:
      const index = state.myPosts.findIndex((e) => e.id === payload.id);
      const myPostsArray = [...state.myPosts];
      myPostsArray[index].title = payload.title;
      myPostsArray[index].body = payload.body;

      return {
        ...state,
        myPosts: myPostsArray
      };
    default:
      return state;
  }
};
export default addRemovePostsReducer;
