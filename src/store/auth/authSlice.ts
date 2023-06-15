import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; password: string }>) {
      const { email, password } = action.payload;
      if (email === state.user?.email && password === state.user?.password) {
        state.user = {
          email,
          password,
        };
        state.isAuthenticated = true;
      }
    },
    signup(state, action: PayloadAction<{ email: string; password: string }>) {
      const { email, password } = action.payload;

      state.user = {
        email,
        password,
      };
      state.isAuthenticated = false;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, signup, logout } = authSlice.actions;

export default authSlice.reducer;