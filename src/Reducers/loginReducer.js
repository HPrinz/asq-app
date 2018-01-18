import { Login, Logout } from "../Actions/actionTypes";

const initialState = { isLoggedIn: false, username: "null" };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case Login:
      return {
        ...state,
        isLoggedIn: true,
        username: action.data.username
      };

    case Logout:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

export default loginReducer;
