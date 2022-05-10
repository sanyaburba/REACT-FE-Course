import React, {useCallback, useState} from 'react';
import styles from "./MovieDetails.module.scss";
import logo from "../../images/lg.png";
import MyButton from "../UI/MyButton/MyButton";
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from "@mui/material";
import {moviesAPI} from "../../services/MoviesService";
import noPhoto from '../../images/noPhoto.png'
import {Link} from "react-router-dom";

const MovieDetails = ({setPage, headRef, movieId}) => {


    const {data: movie, error, isLoading} = moviesAPI.useGetMovieQuery(movieId)
    const onSearchButtonClick = () => setPage('HEAD')
    const [isError, setIsError] = useState(false);

    console.log(isError)
    console.log(movie)

    const onError = useCallback(() => {
        setIsError(true)
    },[setIsError]);
    return (
        <header ref={headRef} className={styles.header}>
            {isLoading && <h1>Loading movie...</h1>}
            {error && <h1>{error}</h1>}
            <div className={styles.content}>
                <div className={styles.row}>
                    <Link
                        to={'/'}
                        className="header__logo"
                    >
                        <img
                            src={logo}
                            alt=""
                        />
                    </Link>
                    <IconButton
                        onClick={onSearchButtonClick}
                        style={{transform: 'scaleX(-1)'}}
                    >
                        <SearchIcon style={{color: '#F65261', fontSize: '2rem'}}/>
                    </IconButton>
                </div>
                <div className={styles.details_row}>
                    {!isError ? <img
                        src={movie?.poster_path}
                        alt={movie?.title}
                        className={styles.poster}
                        onError={error && onError}
                    />: <img
                        src={noPhoto}
                        alt={movie?.title}
                        className={styles.poster}
                    />}
                    <div className={styles.details}>
                        <div className={styles.title_row}>
                            <h1 className={styles.title}>
                                {movie?.title}
                            </h1>
                            <div className={styles.rating_border}>
                                <h1 className={styles.rating}>
                                    {movie?.vote_average}
                                </h1>
                            </div>

                        </div>
                        <p className={styles.genre}>
                            {movie?.genres.join(', ')}
                        </p>
                        <div className={styles.year_row}>
                            <h2 className={styles.year}>
                                {movie?.release_date.substr(0, 4)}
                            </h2>
                            <h2>
                                {movie?.runtime} min
                            </h2>
                        </div>
                        <p className={styles.description}>
                            {movie?.overview}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MovieDetails;
