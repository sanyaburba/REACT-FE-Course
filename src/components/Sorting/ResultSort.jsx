import React from 'react';
import styles from './SortingResult.module.scss';

const ResultSort = () => {
    return (
        <div className={styles.movie_sort}>
            <h1>sort by</h1>
            <select name="sorting" id="">
                <option defaultValue="releaseDate">release date</option>
                <option defaultValue="movie">movie</option>
                <option defaultValue="mother">mother</option>
                <option defaultValue="brother">brother</option>
            </select>
        </div>
    );
};

export default ResultSort;
