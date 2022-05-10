import React, {useCallback, useContext} from 'react';
import styles from './LoginPage.module.scss'
import * as Yup from "yup";
import {Form, Formik} from "formik";
import MyInput from "../UI/MyInput/MyInput";
import {AuthContext} from "../../Context";
import MyPasswordInput from "../UI/MyInput/MyPasswordInput";

const LoginPage = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const validationSchema = Yup.object().shape({
        userId: Yup.string().typeError('value should be a string').required('This field is required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    })

    const onFormSubmit = useCallback(async () => {
       await setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }, [setIsAuth])

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
                        onSubmit={(values)=>onFormSubmit(values)}
                        validator={() => ({})}
                    >
                        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                            <Form onSubmit={handleSubmit}>
                                <MyInput
                                    title="user id*"
                                    placeholder="Enter your email"
                                    name='userId'
                                    type="email"
                                    value={values.userId}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.userId}
                                    errors={errors.userId}
                                />
                                <MyPasswordInput
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
                                        type='reset'
                                        className={styles.button2}>
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={!isValid && !dirty}
                                        className={styles.button}>
                                        Log in
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
