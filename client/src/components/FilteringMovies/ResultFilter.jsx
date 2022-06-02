import React from 'react';
import styles from './ResultFilter.module.scss'

export const ResultFilter = ({ setFilter }) => {

    return (
        <div className={styles.movie_types}
            data-testid='ResultFilter'>
            <ul>
                <li onClick={() => setFilter('')}>all</li>
                <li onClick={() => setFilter('drama')}>drama</li>
                <li onClick={() => setFilter('comedy')}>comedy</li>
                <li onClick={() => setFilter('fantasy')}>fantasy</li>
                <li onClick={() => setFilter('thriller')}>thriller</li>
                <li onClick={() => setFilter('adventure')}>adventure</li>
            </ul>
        </div>
    );
};

