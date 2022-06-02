import React from 'react';
import styles from './MyButton.module.scss'

export const MyButton = ({ value }) => {
    return (
        <button className={styles.btn_red}>
            {value}
        </button>
    );
};
