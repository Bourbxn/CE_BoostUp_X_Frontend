import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";
import { usersApi } from "../features/api/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
  reducer: {
    user: userReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
