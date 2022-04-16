import React, {useCallback, useState} from 'react';
import styles from './Head.module.scss'
import movie from '../../images/lg.png'
// import movie from '../../images/lg.jpeg'
import MyButton from "../MyButton/MyButton";
import AddModal from "../modals/AddModal";
import {Link} from "react-router-dom";

const Head = ({setSuccessActive}) => {

    const [modalActive, setModalActive] = useState(false);

    const addMovieButtonClick = useCallback(() => setModalActive(true), []);


    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <Link
                        to={'/'}
                        className="header__logo"
                    >
                        <img src={movie} alt=""/>
                    </Link>
                    <button
                        className={styles.btn_black}
                        onClick={addMovieButtonClick}
                    >
                        +add movie
                    </button>
                    <AddModal
                        active={modalActive}
                        setActive={setModalActive}
                        setSuccessActive={setSuccessActive}
                    />
                </div>
                <div className={styles.finder}>
                    <div className={styles.finder_title}>
                        find your movie
                    </div>
                    <div className={styles.finder_row}>
                        <input
                            type="text"
                            placeholder='What do you want to watch?'
                        />
                        {/*<button className={styles.btn_red} >search</button>*/}
                        <MyButton value='Search'/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Head;
