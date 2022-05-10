import React, {useCallback} from 'react';
import styles from './Modals.module.scss'
import {Check} from "@mui/icons-material";

const SuccessAddModal = ({active, setActive}) => {

    const closeModal = useCallback(() => setActive(false), [setActive]);

    return (
        <div
            className={active ? styles.modal : styles.hideModal}
            onClick={closeModal}
        >

            <div className={styles.modalContent}>
                <span
                    className={styles.close}
                    onClick={closeModal}
                >
                    &times;
                </span>
                <div className={styles.addContent}>
                    <div className={styles.modalBody}>
                        <div className={styles.checkIcon}>
                            <Check style={{fontSize: '4rem', color: 'white'}}/>
                        </div>
                        <h1 className={styles.heading}>congratulations !</h1>
                        <div className={styles.addRow}>
                            <p className={styles.addMessage}>The movie has been added to database successfully</p>
                            {/*<MyButton value='confirm' className={styles.button}/>*/}
                        </div>
                    </div>
                </div>

                {/*<div className={styles.modalFooter}>*/}
                {/*    <h3>Modal Footer</h3>*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export default SuccessAddModal;
