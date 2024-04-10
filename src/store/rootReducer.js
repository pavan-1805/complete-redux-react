import { combineReducers } from "redux";
import addRemovePostsReducer from "./reducer/addRemovePostsReducer";
import dataFetchingReducer from "./reducer/dataFetchingReducer";

console.log('REDUCERS');
let  reducer = combineReducers({
  dataFetchingReducer:dataFetchingReducer,
  addRemovePostsReducer:addRemovePostsReducer
});
export default reducer;
