import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const moviesAPI = createApi({
        reducerPath: 'moviesAPI',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
        tagTypes: ['Movie'],
        endpoints: (build) => ({
            fetchAllMovies: build.query({
                query: ({filter = '', search, offset, limit, sort, sortOrder }) => ({
                    url: `/movies?${filter && `filter=${filter}`}&${search && `search=${search}`}&searchBy=title&sortBy=${sort}&sortOrder=${sortOrder}&offset=${offset}&limit=${limit}`,
                }),
                providesTags: result => ['Movie']
            }),
            getMovie: build.query({
                query: (id) => ({
                    url: `/movies/${id}`,
                }),
                providesTags: result => ['Movie']
            }),
            searchMovie: build.query({
                query: (search) => ({
                    url: `/movies?search=${search}&searchBy=title`,
                }),
                providesTags: result => ['Movie']
            }),
            createMovie: build.mutation({
                query: (movie) => ({
                    url: `/movies`,
                    method: 'POST',
                    body: movie
                }),
                invalidatesTags: ['Movie']
            }),
            updateMovie: build.mutation({
                query: (movie) => ({
                    url: `/movies`,
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: movie
                }),
                invalidatesTags: ['Movie']
            }),
            deleteMovie: build.mutation({
                query: (movie) => ({
                    url: `/movies/${movie.id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['Movie']
            })
        })
    })
;
