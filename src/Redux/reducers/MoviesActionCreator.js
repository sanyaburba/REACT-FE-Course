import axios from "axios";
// import {moviesFetching, moviesFetchingError, moviesFetchingSuccess} from "./moviesSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
//
// export const fetchMovies = () => async (dispatch) => {
//     try {
//         dispatch(moviesFetching())
//         const response = await axios.get('http://localhost:4000/movies');
//         dispatch(moviesFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(moviesFetchingError(e.message))
//     }
// }

export const fetchMovies = createAsyncThunk(
    'movies/fetchAll',
    async(_, thunkAPI ) => {
        try {
            const response = await axios.get('http://localhost:4000/movies');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Cannot load movies')
        }

    }
)

// export const fetchSingleMovie = createAsyncThunk(
//     'movies/fetchSingle',
//     async(_, thunkAPI) => {
//         try {
//             const response = await
//         } catch (e) {
//             return thunkAPI.rejectWithValue('not found')
//         }
//     }
// )
