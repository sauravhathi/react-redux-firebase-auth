import { Dispatch } from "redux";
import { UserCredential } from "firebase/auth";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
} from "../../constants/actionTypes";
import { auth } from "../../Firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        dispatch({ type: LOGIN_FAILURE, payload: "User not found" });
      } else {
        console.log(error);
      }
      throw error;
    }
  };
};

export const signup = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;
        dispatch({ type: SIGNUP_SUCCESS, payload: user });
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};

export const checkAuthState = () => {
  return (dispatch: Dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      } else {
        dispatch({ type: LOGOUT_SUCCESS });
      }
    });
  };
};

export const logout = () => {
  return async (dispatch: Dispatch) => {
    try {
      await signOut(auth);
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error: any) {
      console.log(error);
    }
  };
};