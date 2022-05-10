import React from 'react';
import movieLogo from '../../images/lg.png'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img
                className={styles.img}
                src={movieLogo}
                alt=""
            />
        </footer>
        );
};

export default Footer;
