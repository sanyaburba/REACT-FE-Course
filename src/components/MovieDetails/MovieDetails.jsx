import React from 'react';
import styles from "./MovieDetails.module.scss";
import logo from "../../images/lg.png";
import MyButton from "../MyButton/MyButton";
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from "@mui/material";
import {moviesAPI} from "../../services/MoviesService";

const MovieDetails = () => {

    const {data: movies, error, isLoading} = moviesAPI.useFetchAllMoviesQuery(6)
    console.log(movies)

    return (
        <header className={styles.header}>
            {isLoading && <h1>Loading movies...</h1>}
            {error && <h1>{error}</h1>}
            <div className={styles.content}>
                <div className={styles.row}>
                    <div className="header__logo">
                        <img src={logo} alt=""/>
                    </div>
                    <IconButton style={{transform: 'scaleX(-1)'}}>
                        <SearchIcon style={{color: '#F65261', fontSize: '2rem'}}/>
                    </IconButton>
                </div>
                <div className={styles.details_row}>

                    <img src={movies.data[0].poster_path} alt={movies.data[0].title} className={styles.poster}/>
                    <div className={styles.details}>
                    <div className={styles.title_row}>
                        <h1 className={styles.title}>{movies.data[0].title}</h1>
                        <div className={styles.rating_border}>
                            <h1 className={styles.rating}>{movies.data[0].vote_average}</h1>
                        </div>

                    </div>
                    <p className={styles.genre}>{movies.data[0].genres.join(', ')}</p>
                    <div className={styles.year_row}>
                        <h2 className={styles.year}>{movies.data[0].release_date.substr(0,4)}</h2>
                        <h2>{movies.data[0].runtime} min</h2>
                    </div>
                    <p className={styles.description}>{movies.data[0].overview}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MovieDetails;
