import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
}

interface AuthState {
  users: User[];
  isAuthenticated: boolean;
  currentUser: User | null;
}

const initialState: AuthState = {
  users: [],
  isAuthenticated: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; password: string }>) {
      const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
      }
    },
    signup(state, action: PayloadAction<{ email: string; password: string }>) {
      const { email, password } = action.payload;

      const newUser: User = {
        email,
        password,
      };

      state.users.push(newUser);
      state.isAuthenticated = false;
    },
    logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, signup, logout } = authSlice.actions;

export default authSlice.reducer;