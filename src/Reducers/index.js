import { combineReducers } from "redux";
import QuestionsReducer from "./questionsReducer";
import NavigationReducer from "./navigationReducer";
import LoginReducer from "./loginReducer";

const AppReducer = combineReducers({
  QuestionsReducer,
  NavigationReducer,
  LoginReducer
});

export default AppReducer;
