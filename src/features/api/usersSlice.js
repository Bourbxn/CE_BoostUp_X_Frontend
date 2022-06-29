import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getCookie from "../../hook/getCookie";

const token = `Bearer ` + getCookie("token");
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND,
  }),
  endpoints: (builder) => ({}),
});

export const {} = usersApi;
