import {createSlice} from "@reduxjs/toolkit";
import {fetchMovies} from "./MoviesActionCreator";

const initialState = {
    movies: [],
    isLoading: false,
    error: ''
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMovies.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.movies = action.payload.data;
        },
        [fetchMovies.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchMovies.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

// export const {moviesFetching, moviesFetchingSuccess, moviesFetchingError} = moviesSlice.actions;

export default moviesSlice.reducer;
