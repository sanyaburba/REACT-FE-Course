import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import moviesReducer from './reducers/moviesSlice'
import {moviesAPI} from "../services/MoviesService";


const rootReducer = combineReducers({
    moviesReducer,
    [moviesAPI.reducerPath]: moviesAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesAPI.middleware)
})
};
