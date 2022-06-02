import React, { useCallback, useState } from 'react';
import styles from '../MyInput.module.scss'
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const MyPasswordInput = ({ title, type, placeholder, value, onBlur, onChange, touched, errors, name }) => {

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = useCallback(() =>
        setShowPassword((prevShowPassword) => !prevShowPassword)
        , []);

    return (
        <div className={styles.input_row}>
            <h2 className={styles.heading}>
                {title}
            </h2>
            <div className={styles.inputWithButton}>
                <input
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    type={showPassword === false ? type : 'text'}
                    className={touched && errors ? styles.errorInput : styles.input}
                    placeholder={placeholder}
                />
                <IconButton onClick={handleShowPassword} className={styles.showButton} data-testid='showPassword'>
                    {showPassword === false ?
                        <VisibilityOff id={styles.visibility} />
                        :
                        <Visibility id={styles.visibility} />}
                </IconButton>
            </div>
            {touched && errors && (
                <p className={styles.errorMessage}>
                    {errors}
                </p>
            )}
        </div>
    );
};

