import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
    endpoints: (builder) => ({
        getUserByUsername: builder.query({
            query: (name) => `/users/${name}`,
        }),
    }),

});

export const { useGetUserByUsernameQuery } = githubApi