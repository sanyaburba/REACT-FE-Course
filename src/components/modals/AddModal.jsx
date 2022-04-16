import React, {useCallback, useState} from 'react';
import styles from './modals.module.scss'
import MyInput from "../MyInput/MyInput";
import {movies} from "./data";
import {moviesAPI} from "../../services/MoviesService";
import MySelect from "../MySelect/MySelect";

import {Form, Formik, Field} from 'formik';
import * as Yup from "yup";
import axios from "axios";
import SuccessAdd from "./SuccessAdd";


const AddModal = ({active, setActive, setSuccessActive}) => {

    const validationSchema = Yup.object().shape({
        title: Yup.string().typeError('value should be a string').required('This field is required'),
        release_date: Yup.string().typeError('value should be a string').required('This field is required'),
        poster_path: Yup.string().typeError('value should be a string').required('This field is required'),
        genres: Yup.array().required('Select at least one of option'),
        overview: Yup.string().typeError('value should be a string').required('This field is required'),
        runtime: Yup.number().typeError('value should be a string').required('This field is required'),
    })

    const [selected, setSelected] = useState([])

    const toggleOption = ({id}) => {
        setSelected(prevSelected => {
            // if it's in, remove
            const newArray = [...prevSelected]
            if (newArray.includes(id)) {
                return newArray.filter(item => item !== id)
                // else, add
            } else {
                newArray.push(id)
                return newArray;
            }
        })
    }
    const closeModal = useCallback(() => setActive(false), [setActive]);
    const notCloseOnContent = useCallback((e) => e.stopPropagation(), []);

    const [createMovie, {}] = moviesAPI.useCreateMovieMutation();

    const onFormSubmit = useCallback(async (values,resetForm) => {
        createMovie(values)
            .unwrap()
            .then(() => {
                alert(values)
                resetForm()
                setActive(false)
                setSuccessActive(true)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [createMovie, setActive])


    return (
        <div
            className={active ? styles.modal : styles.hideModal}
            onClick={closeModal}
        >
            <div
                className={styles.modalContent}
                onClick={notCloseOnContent}
            >
                <span
                    className={styles.close}
                    onClick={closeModal}
                >
                    &times;
                </span>
                <div className={styles.modalBody}>
                    <h1 className={styles.heading}>
                        ADD movie
                    </h1>

                    <Formik
                        initialValues={{
                            "title": "",
                            "release_date": "",
                            "poster_path": "",
                            "overview": "",
                            "runtime": 0,
                            "genres": [
                                "Comedy",
                                "Drama",
                                "Romance"
                            ]
                        }}
                        validateOnBlur
                        validationSchema={validationSchema}
                        onSubmit={(values, {resetForm})=>onFormSubmit(values, resetForm)}
                        validator={() => ({})}
                    >
                        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                            <Form onSubmit={handleSubmit}>
                                <MyInput
                                    title="title"
                                    placeholder="Your Title"
                                    name='title'
                                    value={values.title.toString()}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.title}
                                    errors={errors.title}
                                />
                                <MyInput
                                    title="release date"
                                    type="date"
                                    name='release_date'
                                    placeholder="Select Date"
                                    value={values.release_date.toString()}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.release_date}
                                    errors={errors.release_date}
                                />
                                <MyInput
                                    title="movie url"
                                    name='poster_path'
                                    type="url"
                                    placeholder="Movie URL here"
                                    value={values.poster_path.toString()}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.poster_path}
                                    errors={errors.poster_path}
                                />
                                <h2 className={styles.titleHeading}>
                                    Genre
                                </h2>
                                {/*<MySelect*/}
                                {/*    options={movies}*/}
                                {/*    selected={selected}*/}
                                {/*    toggleOption={toggleOption}*/}
                                {/*/>*/}
                                <Field as="select" name="genres" multiple>
                                    <option value={values.genres}>{values.genres}</option>
                                    <option value={values.genres}>{values.genres}</option>
                                    <option value={values.genres}>{values.genres}</option>
                                </Field>
                                <MyInput
                                    title="overview"
                                    name='overview'
                                    placeholder="Overview here"
                                    value={values.overview.toString()}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.overview}
                                    errors={errors.overview}
                                />
                                <MyInput
                                    title="runtime"
                                    name='runtime'
                                    type='number'
                                    placeholder="Runtime here"
                                    value={Number(values.runtime)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.runtime}
                                    errors={errors.runtime}
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
                                        Submit
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

export default AddModal;
