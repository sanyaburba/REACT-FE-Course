import React from 'react';
import styles from './ErrorPage.module.scss'
import error404 from 'assets/images/404.png'
import logo from 'assets/images/lg.png'
import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div
            data-testid='errorPage'
            className={styles.errorbg}>
            <header className={styles.errorHeader}>
                <img
                    src={logo}
                    alt=""
                />
            </header>
            <div className={styles.errorMessage}>
                <h2 className={styles.errorText}>Page Not Found</h2>
                <img
                    src={error404}
                    alt="errorImage"
                    className={styles.errorImage}
                />
                <Link
                    to={'/'}
                    className={styles.button}
                >
                    go back to home
                </Link>
            </div>
        </div>
    );
};

