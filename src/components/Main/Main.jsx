import React from 'react';
import Moviecard from "../Moviecard/Moviecard";
import ResultFilter from "../Sorting/ResultFilter";
import styles from './Main.module.scss'
import ResultSort from "../Sorting/ResultSort";
import {moviesAPI} from "../../services/MoviesService";

const Main = ({setPage, headRef, setMovieId}) => {

    const {data: movies, error, isLoading} = moviesAPI.useFetchAllMoviesQuery(33)
    console.log(movies)

    const [deleteMovie, {}] = moviesAPI.useDeleteMovieMutation()


    const handleDeleteMovie = (movie) => {
        deleteMovie(movie)
    }

    return (
        <main className={styles.content}>
            <div className={styles.sort}>
                <div className={styles.sorting_row}>
                    <ResultFilter/>
                    <ResultSort/>
                </div>
            </div>
            {movies?.data?.length !== 0 ? <>
                <h2 className={styles.moviesNumber}>
                    <strong>
                        {movies?.data.length}
                    </strong>
                    movies found
                </h2>
                <div className={styles.flex_group}>
                    {isLoading && <h1>Loading movies...</h1>}
                    {error && <h1>{error}</h1>}
                    {movies && movies.data.map(movie => (<Moviecard
                        handleRemove={handleDeleteMovie}
                        headRef={headRef}
                        setPage={setPage}
                        movie={movie}
                        setMovieId={setMovieId}
                        key={movie.id}
                    />))}
                </div>
            </> : <div className={styles.noMovie}>
                <p className={styles.noMovieText}>No Movie Found</p>
            </div>}
        </main>
    );
};

export default Main;
