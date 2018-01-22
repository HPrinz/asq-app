import {
  incrementCounter,
  decrementCounter,
  LOGIN,
  LOGOUT,
  LOAD_QUESTIONS
} from "./actionTypes";

const incrementAction = () => ({
  type: incrementCounter
});

const decrementAction = () => ({
  type: decrementCounter
});

const loadQuestions = (data) => ({
  type: LOAD_QUESTIONS,
  data
});

const login = (data) => ({
  type: LOGIN,
  data
});

const logout = () => ({
  type: LOGOUT
});

export { incrementAction, decrementAction, login, logout, loadQuestions };
