import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, API_KEY } from "src/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    searchVideos: builder.query<ISearchData, string>({
      query: (query, maxResults = 20) => ({
        url: "/search",
        params: {
          q: query,
          part: "snippet",
          maxResults,
          type: "video",
          key: API_KEY,
        },
      }),
    }),

    searchVideoStatistics: builder.query<IVideoStatistics, string>({
      query: (id) => ({
        url: "/videos",
        params: {
          part: "statistics",
          id,
          key: API_KEY,
        },
      }),
    }),

    searchVideoDetails: builder.query<IVideo, string>({
      query: (id) => ({
        url: "videos",
        params: {
          part: "snippet, statistics",
          id,
          key: API_KEY,
        },
      }),
    }),

    searchVideoComments: builder.query<IComment, string>({
      query: (videoId, maxResults = 100) => ({
        url: "commentThreads",
        params: {
          part: "snippet",
          videoId,
          maxResults,
          key: API_KEY,
        },
      }),
    }),

    searchRelatedVideos: builder.query<ISearchData, string>({
      query: (id, maxResults = 20) => ({
        url: "search",
        params: {
          part: "snippet",
          type: "video",
          id,
          maxResults,
          key: API_KEY,
        },
      }),
    }),

    searchChannelDetails: builder.query<IChannel, string>({
      query: (id) => ({
        url: "channels",
        params: {
          part: "snippet, statistics",
          id,
          key: API_KEY,
        },
      }),
    }),
  }),
});

export const {
  useSearchVideosQuery,
  useSearchVideoStatisticsQuery,
  useSearchVideoDetailsQuery,
  useSearchVideoCommentsQuery,
  useSearchRelatedVideosQuery,
  useSearchChannelDetailsQuery,
} = apiSlice;
