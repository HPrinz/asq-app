import { combineReducers } from "redux";
import QuestionsReducer from "./QuestionsReducer";
import NavigationReducer from "./NavigationReducer";
import LoginReducer from "./LoginReducer";

const AppReducer = combineReducers({
  QuestionsReducer,
  NavigationReducer,
  LoginReducer
});

export default AppReducer;
