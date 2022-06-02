import React, { useCallback } from 'react';
import styles from '../Modals.module.scss'

export const DeleteModal = ({ active, setActive, movie, handleRemove }) => {

    const closeModal = useCallback((e) => {
        setActive(false)
    }, [setActive]);

    const notCloseOnContent = useCallback((e) => e.stopPropagation(), []);

    const deleteMovie = useCallback((e) => {
        e.stopPropagation()
        handleRemove(movie)
    }, [])

    return (
        <div
            className={active ? styles.modal : styles.hideModal}
            onClick={closeModal}
            data-testid='deleteModal'
        >
            <div
                className={styles.modalContent}
                onClick={notCloseOnContent}
            >
                <span
                    className={styles.close}
                    onClick={closeModal}
                    data-testid='closeButton'
                >
                    &times;
                </span>
                <div className={styles.modalBody}>
                    <h1 className={styles.heading}>Delete movie</h1>
                    <div className={styles.row}>
                        <p className={styles.message}>Are you sure want to delete this movie?</p>
                        {/*<MyButton value='confirm' className={styles.button}/>*/}
                        <button
                            className={styles.button}
                            onClick={deleteMovie}
                            data-testid='confirmButton'
                        >
                            confirm
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

