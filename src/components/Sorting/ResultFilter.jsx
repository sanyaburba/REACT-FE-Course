import React from 'react';
import styles from './SortingResult.module.scss'
import '../../index.css'


const ResultFilter = () => {
    return (
        <div className={styles.movie_types}>
            <ul>
                <li><a href="/" className={styles.active}>all</a></li>
                <li><a href="/">comedy</a></li>
                <li><a href="/">documentary</a></li>
                <li><a href="/">horrors</a></li>
                <li><a href="/">crime</a></li>
            </ul>
        </div>
    );
};

export default ResultFilter;
