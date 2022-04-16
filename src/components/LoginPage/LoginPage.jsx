import React from 'react';
import styles from './LoginPage.module.scss'
import * as Yup from "yup";
import {Formik} from "formik";
import MyInput from "../MyInput/MyInput";

const LoginPage = () => {

    const validationSchema = Yup.object().shape({
        userId: Yup.string().typeError('value should be a string').required('This field is required'),
        password: Yup.string().typeError('value should be a string').required('This field is required'),
    })

    return (
        <div className={styles.backImage}>

            <div className={styles.background}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        Log In
                    </h1>
                    <Formik
                        initialValues={{
                            userId: '',
                            password: '',
                        }}
                        validateOnBlur
                        validationSchema={validationSchema}
                        onSubmit={(values) => console.log('hello', values)}
                    >
                        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                            <div>
                                <MyInput
                                    title="user id*"
                                    placeholder="Enter your email"
                                    name='userId'
                                    value={values.userId}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.userId}
                                    errors={errors.userId}
                                />
                                <MyInput
                                    title="password*"
                                    type="password"
                                    name='password'
                                    placeholder="Your Password"
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.password}
                                    errors={errors.password}
                                />
                                <div className={styles.buttons}>
                                    <button
                                        value='confirm'
                                        className={styles.button2}>
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={!isValid && !dirty}
                                        onClick={handleSubmit}
                                        className={styles.button}>
                                        Log in
                                    </button>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
