import { ActionTypes } from "../constants/constants";

const initialState = {
  posts: [],
  error: "",
  isLoading: true
};

const dataFetchingReducer = (state = initialState, { type, payload }) => {
  console.log('payload',payload);
  switch (type) {
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        posts: payload,
        isLoading: false
      };
    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    // case ActionTypes.REMOVE_POST:
    //   // console.log('data:',state.posts.splice(state.posts.findIndex(e=>e.id===payload.id),1));
    //   // let arr = []
    //   // let filterArr = []
    //   // console.log('payload:',payload);
    //   // for (let index = 0; index < state.posts.length; index++) {
    //   //  if(state.posts[index].id===payload.id){
    //   //    filterArr.push(state.posts[index])
    //   //  }  else{
    //   //    arr.push(state.posts[index])
    //   //  }
    //   // }

    //   const data = state.posts;
    //   const val = data.findIndex((e) => e.id === payload.id);
    //   data.splice(val, 1);

    //   return {
    //     ...state,
    //     posts: data
    //   };
    // case ActionTypes.ADD_POST:
    //   console.log(payload);
    //   console.log(state.posts);

    //   return {
    //     ...state,
    //     posts: [...state.posts, payload]
    //   };
    default:
      return state;
  }
};
export default dataFetchingReducer;
