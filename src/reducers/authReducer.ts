import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes';

interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;