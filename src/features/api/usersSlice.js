import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = `Bearer ` + window.localStorage.getItem("token");
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND,
  }),
  endpoints: (builder) => ({}),
});

export const {} = usersApi;
