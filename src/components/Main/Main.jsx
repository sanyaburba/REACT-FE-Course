import React from 'react';
import Moviecard from "../Moviecard/Moviecard";
import ResultFilter from "../Sorting/ResultFilter";
import styles from './Main.module.scss'
import ResultSort from "../Sorting/ResultSort";
import MyInput from "../MyInput/MyInput";
import DeleteModal from "../modals/DeleteModal";
import AddModal from "../modals/AddModal";
import EditModal from "../modals/EditModal";

const Main = () => {
    return (
        <main className={styles.content}>
            <div className={styles.sort}>
                <div className={styles.sorting_row}>
                    <ResultFilter />
                    <ResultSort />
                </div>
                <DeleteModal />
                <AddModal />
                <EditModal />
            </div>
            <h2 className="movies__counter">39 finded</h2>
            <div className="flex-group">
                <Moviecard />
                <Moviecard />
                <Moviecard />
                <Moviecard />
                <Moviecard />
                <Moviecard />
                <Moviecard />
                <Moviecard />
                <Moviecard />
                <Moviecard />
                <Moviecard />
            </div>
        </main>
    );
};

export default Main;