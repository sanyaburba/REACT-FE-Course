import React from 'react';
import styles from './MyInput.module.scss'

const MyInput = ({title, type = 'text', placeholder, value, onBlur, onChange, touched, errors, name}) => {

    return (
        <div className={styles.input_row}>
            <h2 className={styles.heading}>
                {title}
            </h2>
            <input
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type={type}
                className={touched && errors ? styles.errorInput : styles.input}
                placeholder={placeholder}
            />
            {touched && errors && (
                <p className={styles.errorMessage}>
                    {errors}
                </p>
            )}
        </div>
    );
};

export default MyInput;
