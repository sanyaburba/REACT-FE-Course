import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const moviesAPI = createApi({
        reducerPath: 'moviesAPI',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
        tagTypes: ['Movie'],
        endpoints: (build) => ({
            fetchAllMovies: build.query({
                query: (limit= 10) => ({
                    url: `/movies?limit=${limit}`,
                    params: {
                        _limit: limit
                    }
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
                    url: `/movies/${movie.id}`,
                    method: 'PUT',
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
