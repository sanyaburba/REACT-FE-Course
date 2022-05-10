import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const API = axios.create({baseUrl: 'http://localhost:4000'});


export const fetchMovies = createAsyncThunk(
    'movies/fetchAll',
    async(_, thunkAPI ) => {
        try {
            const response = await API.get(`/movies`);
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
