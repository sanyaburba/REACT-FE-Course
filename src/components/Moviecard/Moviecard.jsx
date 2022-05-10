import React, {useCallback, useState} from 'react';
import {MoreVert} from "@mui/icons-material";
import styles from './Moviecard.module.scss'

import noPhoto from '../../images/noPhoto.png'
import PopUp from "./PopUp";

const Moviecard = ({movie, setPage, headRef, handleRemove, setMovieId}) => {

    const handleScroll = (ref) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const [isError, setIsError] = useState(false);

    const openMovieButtonClick = useCallback(() => {
        setPage('DETAILS')
        setMovieId(movie?.id)
        handleScroll(headRef.current)
    }, [headRef, movie?.id, setMovieId, setPage])

    const [openedList, setOpenedList] = useState(false);

    const openPopUp = useCallback(() => setOpenedList(true), []);
    const closePopUp = useCallback(() => setOpenedList(false), []);

    const onError = useCallback(() => {
        setIsError(true)
    }, [setIsError]);

    return (
        <div
            className={styles.movie_card}
        >
            <div className={styles.relative_block}
            >
                <PopUp
                    active={openedList}
                    close={closePopUp}
                    handleRemove={handleRemove}
                    movie={movie}
                />
                {!isError ? <img
                    src={movie?.poster_path}
                    alt={movie?.title}
                    className={styles.image}
                    onError={onError}
                /> : <img
                    src={noPhoto}
                    alt={movie?.title}
                    className={styles.image}
                />}
                <button
                    className={styles.buttonHover}
                    onClick={openPopUp}
                >
                    <MoreVert id={styles.moreButton}/>
                </button>

            </div>
            <div className={styles.movie_row}>
                <h2 className={styles.movie_title}
                    onClick={openMovieButtonClick}
                >
                    {movie?.title}
                </h2>
                <h3 className={styles.movie_date}>
                    {movie?.release_date?.substr(0, 4)}
                </h3>
            </div>
            <p className={styles.movie_genre}>
                {movie?.genres?.join(', ')}
            </p>
        </div>
    );
};

export default Moviecard;
