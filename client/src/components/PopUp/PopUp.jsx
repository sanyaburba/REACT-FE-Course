import React, {useCallback, useState} from 'react';

import styles from './PopUp.module.scss'
import DeleteModal from "../Modals/DeleteModal";
import EditModal from "../Modals/EditModal";

const PopUp = ({close, movie, handleRemove, active}) => {

    const [deleteModalActive, setDeleteModalActive] = useState(false);
    const [editModalActive, setEditModalActive] = useState(false);

    const deleteMovieButtonClick = useCallback(() => setDeleteModalActive(true), []);
    const editMovieButtonClick = useCallback(() => setEditModalActive(true), []);

    const notCloseOnContent = useCallback((e) => e.stopPropagation(), []);

    return (
        <div
            className={active ? styles.popUp : styles.hidePopUp}
            onClick={close}
            data-testid='popUp'
        >
            <div
                className={styles.modalContent}
                onClick={notCloseOnContent}
            >
                <span
                    className={styles.close}
                    onClick={close}
                    data-testid='closeButton'
                >
                    &times;
                </span>
                <div className={styles.buttons}>
                    <button
                        className={styles.popUpButton}
                        onClick={editMovieButtonClick}
                        data-testid='editButton'
                    >
                        Edit
                    </button>
                    <button
                        className={styles.popUpButton}
                        onClick={deleteMovieButtonClick}
                        data-testid='deleteButton'
                    >
                        Delete
                    </button>
                </div>
                <DeleteModal
                    movie={movie}
                    handleRemove={handleRemove}
                    active={deleteModalActive}
                    setActive={setDeleteModalActive}/>
                <EditModal
                    movie={movie}
                    active={editModalActive}
                    setActive={setEditModalActive}
                />
            </div>
        </div>
    );
};

export default PopUp;
