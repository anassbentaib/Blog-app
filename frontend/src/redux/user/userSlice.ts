import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state: any) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state: any, action: any) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state: any, action: { payload: string }) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state: any) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state: any, action: any) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },
    updateFailure: (state: any, action: { payload: string }) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state: any) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state: any) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
    deleteUserFailure: (state: any, action: { payload: string }) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess: (state: any) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  signoutSuccess,
  signInStart,
  signInFailure,
  signInSuccess,
  updateSuccess,
  updateStart,
  updateFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
