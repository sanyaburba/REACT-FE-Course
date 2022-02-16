import React from 'react';
import styles from './SortingResult.module.scss';

const ResultSort = () => {
    return (
        <div className={styles.movie_sort}>
            <h1>sort by</h1>
            <select name="sorting" id="">
                <option value="releaseDate" selected>release date</option>
                <option value="movie">movie</option>
                <option value="mother">mother</option>
                <option value="brother">brother</option>
            </select>
        </div>
    );
};

export default ResultSort;