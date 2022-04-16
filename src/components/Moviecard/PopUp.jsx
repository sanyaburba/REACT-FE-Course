import React, {useCallback, useState} from 'react';
import styles from "./Moviecard.module.scss";
import DeleteModal from "../modals/DeleteModal";
import EditModal from "../modals/EditModal";

const PopUp = ({close, movie, handleRemove}) => {

    const [deleteModalActive, setDeleteModalActive] = useState(false);
    const [editModalActive, setEditModalActive] = useState(false);

    const deleteMovieButtonClick = useCallback(() => setDeleteModalActive(true), []);
    const editMovieButtonClick = useCallback(() => setEditModalActive(true), []);

    console.log(handleRemove)
    const notCloseOnContent = useCallback((e) => e.stopPropagation(), []);

    return (
        <div
            className={styles.popUp}
            onClick={close}
        >
            <div
                className={styles.modalContent}
                onClick={notCloseOnContent}
            >
                <span
                    className={styles.close}
                    onClick={close}
                >
                    &times;
                </span>
                <div className={styles.buttons}>
                    <button
                        className={styles.popUpButton}
                        onClick={editMovieButtonClick}
                    >
                        Edit
                    </button>
                    <button
                        className={styles.popUpButton}
                        onClick={deleteMovieButtonClick}
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
