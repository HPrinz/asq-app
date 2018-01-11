import { combineReducers } from "redux";
import QuestionsReducer from "./questionsReducer";
import NavigationReducer from "./navigationReducer";

const AppReducer = combineReducers({
  QuestionsReducer,
  NavigationReducer
});

export default AppReducer;
