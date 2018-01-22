import { LOGIN, LOGOUT } from "../Actions/actionTypes";

const initialState = { isLoggedIn: false, username: "null" };

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.data.username
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

export default LoginReducer;
