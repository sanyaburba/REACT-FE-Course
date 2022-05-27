import React from 'react';
import styles from './MyButton.module.scss'

const MyButton = ({value}) => {
    return (
       <button className={styles.btn_red}>
           {value}
       </button>
    );
};

export default MyButton;