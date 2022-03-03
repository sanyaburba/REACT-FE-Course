import React from 'react';
import styles from './Moviecard.module.scss'
import noPhoto from '../../images/noPhoto.png'

const Moviecard = ({movie}) => {
    return (
        <div className={styles.movie_card}>
        <img src={movie.poster_path } alt={movie.title} className={styles.image}/>
            <div className="movie-bg">
                <button></button>
            </div>
            <div className={styles.movie_row}>
                <h2 className={styles.movie_title}> {movie.title}</h2>
                <h3 className={styles.movie_date}>{movie.release_date.substr(0,4)}</h3>
            </div>
            <p className={styles.movie_genre}>{movie.genres.join(', ')}</p>
        </div>
    );
};

export default Moviecard;
