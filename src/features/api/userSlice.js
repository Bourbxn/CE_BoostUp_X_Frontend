import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getCookie from "../../hook/getCookie";

const token = `Bearer ` + getCookie("token");
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND,
  }),
  endpoints: (builder) => ({
    currentUser: builder.query({
      query: () => ({
        url: `/users/current/info`,
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useCurrentUserQuery } = userApi;
