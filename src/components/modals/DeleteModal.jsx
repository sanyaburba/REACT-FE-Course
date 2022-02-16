import React from 'react';
import styles from './modals.module.scss'
import MyButton from "../MyButton/MyButton";

const DeleteModal = () => {
    return (
        <div id="DeleteModal" className={styles.modal}>

            <div className={styles.modalContent}>
                <span className={styles.close}>&times;</span>
                {/*<div className={styles.modalHeader}>*/}
                {/*    <h2>Modal Header</h2>*/}
                {/*</div>*/}
                <div className={styles.modalBody}>
                    <h1 className={styles.heading}>Delete movie</h1>
                    <div className={styles.row}>
                    <p className={styles.message}>Are you sure want to delete this movie?</p>
                    {/*<MyButton value='confirm' className={styles.button}/>*/}
                    <button className={styles.button}>confirm</button>
                    </div>
                </div>
                {/*<div className={styles.modalFooter}>*/}
                {/*    <h3>Modal Footer</h3>*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export default DeleteModal;