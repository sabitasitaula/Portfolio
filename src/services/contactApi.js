import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://immense-tor-87617.herokuapp.com/" }),
  endpoints: (builder) => ({
    postContact: builder.mutation({
        query: (data) => {
          return {
            url: `contact/`,
            method: "POST",
            body: { ...data },
          };
        },
      }),
  }),
});

export const { usePostContactMutation } = contactApi;

