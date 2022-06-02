import React from "react";
import movieLogo from "assets/images/lg.png";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <img className={styles.img} src={movieLogo} alt="footerImg" />
    </footer>
  );
};
