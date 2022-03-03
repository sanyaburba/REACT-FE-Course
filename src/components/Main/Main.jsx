import React, {useEffect, useState} from 'react';
import Moviecard from "../Moviecard/Moviecard";
import ResultFilter from "../Sorting/ResultFilter";
import styles from './Main.module.scss'
import ResultSort from "../Sorting/ResultSort";
import MyInput from "../MyInput/MyInput";
import DeleteModal from "../modals/DeleteModal";
import AddModal from "../modals/AddModal";
import EditModal from "../modals/EditModal";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../../Redux/reducers/MoviesActionCreator";
import {moviesAPI} from "../../services/MoviesService";
import {isAllOf} from "@reduxjs/toolkit";

const Main = () => {



    // const {movies, isLoading, error} = useSelector((state) => state.moviesReducer)
    // console.log(isLoading);
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(fetchMovies());
    // }, [dispatch]);
    // console.log(movies)

    const {data: movies, error, isLoading} = moviesAPI.useFetchAllMoviesQuery(50)
    console.log(movies)



    return (
        <main className={styles.content}>
            <div className={styles.sort}>
                <div className={styles.sorting_row}>
                    <ResultFilter/>
                    <ResultSort/>
                </div>
                <DeleteModal/>
                <EditModal/>
            </div>
            <h2 className="movies__counter">39 finded</h2>
            <div className={styles.flex_group}>
                {isLoading && <h1>Loading movies...</h1>}
                {error && <h1>{error}</h1>}
                {movies && movies.data.map(movie => (<Moviecard
                    movie={movie}
                    key={movie.id}
                /> ))}
            </div>
        </main>
    );
};

export default Main;
