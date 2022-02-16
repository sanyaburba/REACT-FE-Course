import React from 'react';
import styles from './Head.module.scss'
import movie from '../../images/lg.png'
import MyButton from "../MyButton/MyButton";

const Head = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <div className="header__logo">
                        <img src={movie} alt=""/>
                    </div>
                    <button className={styles.btn_black}>
                        +add movie
                    </button>
                </div>
                <div className={styles.finder}>
                    <div className={styles.finder_title}>
                        find your movie
                    </div>
                    <div className={styles.finder_row}>
                        <input type="text" placeholder='What do you want to watch?'/>
                        {/*<button className={styles.btn_red} >search</button>*/}
                        <MyButton value='Search'/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Head;