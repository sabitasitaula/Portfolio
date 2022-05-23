import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://immense-tor-87617.herokuapp.com/" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => `project/6`,
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
