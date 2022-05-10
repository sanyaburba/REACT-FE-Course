import React from 'react';
import styles from './SortingResult.module.scss';

const ResultSort = ({sort, setSort}) => {
    return (
        <div className={styles.movie_sort}>
            <h1>sort by</h1>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value='all'>All</option>
                <option value='title'>Z-A</option>
                <option value='release_date'>From newest to oldest</option>
                <option value='vote_average'>Top Rated</option>
            </select>
        </div>
    );
};

export default ResultSort;
