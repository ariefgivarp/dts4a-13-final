import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thenewsapi.com/v1/news/top?api_token=QyMJjnecYSco0b6UY9TRUlDQczNwuYMmOdeE4XIE&locale=us&limit=10",
  }),
  endpoints: (builder) => ({
    newsToken: builder.query({
      query: () => `/posts`,
    }),
  }),
});

export const { useNewsTokenQuery } = newsAPI;