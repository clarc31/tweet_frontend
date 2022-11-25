import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: { token: null, username: null, canDelete: false },
  };

  export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      login: (state, action) => {
        state.value.token = action.payload.token;
        state.value.username = action.payload.username;
        state.value.canDelete = !action.payload.canDelete; 
        console.log('token', action.payload.token)
        console.log('username', action.payload.username)
        console.log('candelete', !action.payload.canDelete)
      },
    },
  });



export const { login } = usersSlice.actions;
export default usersSlice.reducer;
/*
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, username: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
*/