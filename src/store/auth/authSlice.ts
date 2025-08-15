import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id?: string;
  name?: string;
  token?: string;
}

interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: User;
  errorMessage?: string;
}

const initialState: AuthState = {
  status: 'not-authenticated',
  user: {},
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }: PayloadAction<User>) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }: PayloadAction<string | undefined>) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = payload;
    },
  },
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
