import React from 'react';
import styles from './MyInput.module.scss'

const MyInput = ({title,type='text', placeholder }) => {
    return (
        <div className={styles.input_row}>
            <h2 className={styles.heading}>
                {title}
            </h2>
            <input type={type}  className={styles.input} placeholder={placeholder} />
        </div>
    );
};

export default MyInput;