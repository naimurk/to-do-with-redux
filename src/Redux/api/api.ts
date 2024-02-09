import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contentApi = createApi({
  reducerPath: "todoPath",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000"}),
  endpoints: (builder) => ({
    getToDo: builder.query({
      query: () => ({
        url: "/task",
        method: "GET",

      }),
    }),
  }),
});


export const { useGetToDoQuery } = contentApi


