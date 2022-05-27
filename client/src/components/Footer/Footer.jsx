import React from 'react';
import movieLogo from '../../images/lg.png'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer
            className={styles.footer}
            data-testid='footer'>
            <img
                className={styles.img}
                src={movieLogo}
                alt="footerImg"
            />
        </footer>
    );
};

export default Footer;
