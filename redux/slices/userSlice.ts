import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'types/students';
import * as SecureStore from 'expo-secure-store';

interface AuthState {
  currentUser: Student | null;
}

const userStorage = SecureStore.getItem('user');

const initialState: AuthState = {
  currentUser: userStorage ? JSON.parse(userStorage) : null,
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
