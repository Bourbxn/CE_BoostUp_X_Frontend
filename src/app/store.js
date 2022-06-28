import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";
import { usersApi } from "../features/api/usersSlice";
import { userApi } from "../features/api/userSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
  reducer: {
    user: userReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);
