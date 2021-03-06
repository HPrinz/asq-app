import { createStore, combineReducers } from "redux";
import {
  persistCombineReducers,
  persistStore,
  persistReducer
} from "redux-persist";
import storage from "redux-persist/es/storage";

import questionsReducer from "./src/Reducers/QuestionsReducer";
import NavigationReducer from "./src/Reducers/NavigationReducer";
import loginReducer from "./src/Reducers/LoginReducer";

// config to not persist the *counterString* of the QuestionsReducer's slice of the global state.
const config = {
  key: "root",
  storage,
  blacklist: ["counterString"]
};

const config1 = {
  key: "primary",
  storage
};

// Object of all the reducers for redux-persist
const reducer = {
  questionsReducer,
  NavigationReducer,
  loginReducer
};

// This will persist all the reducers, but I don't want to persist navigation state, so instead will use persistReducer.
// const rootReducer = persistCombineReducers(config, reducer)

// We are only persisting the QuestionsReducer and LoginReducer
const QuestionsReducer = persistReducer(config, questionsReducer);
const LoginReducer = persistReducer(config1, loginReducer);

// combineReducer applied on persisted(QuestionsReducer and LoginReducer) and NavigationReducer
const rootReducer = combineReducers({
  QuestionsReducer,
  NavigationReducer,
  LoginReducer
});

function configureStore() {
  let store = createStore(rootReducer);
  let persistor = persistStore(store);
  return { persistor, store };
}

export default configureStore;
