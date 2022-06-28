import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  user: null,
  error: false,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state) => {
      state.error = true;
    },
    setCredentials: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    },
  },
});

export const { setCredentials, setError, setLoading } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ` + window.localStorage.getItem("token"),
  },
});

export function fetchUser() {
  return async (dispatch) => {
    api
      .get("/users/current/info")
      .then((response) => {
        dispatch(setCredentials({ ...response.data }));
      })
      .catch((err) => {
        dispatch(setError());
      });
  };
}
