import { createSlice } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import { User } from 'types/user';

interface AuthState {
  currentUser: User | null;
  token: string | null;
}

const userStorage = SecureStore.getItem('user');
const token = SecureStore.getItem('token');

const initialState: AuthState = {
  currentUser: userStorage ? JSON.parse(userStorage) : null,
  token: token ?? null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState: (state, action) => {
      if (action.payload.token) {
        SecureStore.deleteItemAsync('token');
        SecureStore.setItem('token', action.payload.token);
      }
      state.currentUser = action.payload.currentUser;
      state.token = action.payload.token;
      SecureStore.deleteItemAsync('user');
      SecureStore.setItem('user', JSON.stringify(action.payload.currentUser));
    },
    deleteUserState: (state) => {
      state.currentUser = null;
      SecureStore.deleteItemAsync('user');
      SecureStore.deleteItemAsync('token');
    },
  },
});

export const { setUserState, deleteUserState } = userSlice.actions;

export default userSlice.reducer;
