import React from 'react';
import styles from './SortingResult.module.scss'

const ResultFilter = () => {
    return (
        <div className={styles.movie_types}>
            <ul>
                <li>all</li>
                <li>comedy</li>
                <li>documentary</li>
                <li>horrors</li>
                <li>crime</li>
            </ul>
        </div>
    );
};

export default ResultFilter;