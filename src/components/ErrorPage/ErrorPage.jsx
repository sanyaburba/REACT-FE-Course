import React from 'react';
import styles from './ErrorPage.module.scss'
import MyButton from "../MyButton/MyButton";
import error404 from '../../images/404.png'

const ErrorPage = () => {
    return (
        <div className={styles.errorbg}>
            <div className={styles.errorMessage}>

            <img src={error404} alt="dfdfdf"  className={styles.errorImage}/>
            </div>
            <button className={styles.button}>hello world</button>
        </div>
    );
};

export default ErrorPage;
