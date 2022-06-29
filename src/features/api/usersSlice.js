import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getCookie from "../../hook/getCookie";

const token = `Bearer ` + getCookie("token");
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND}/users`,
  }),
  endpoints: (builder) => ({
    getRanking: builder.query({
      query: () => ({
        url: "/score/board",
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useGetRankingQuery } = usersApi;
