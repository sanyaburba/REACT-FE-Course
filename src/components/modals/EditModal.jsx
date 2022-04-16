import React, {useCallback, useState} from 'react';
import styles from './modals.module.scss'
import MyInput from "../MyInput/MyInput";
import {movies} from "./data";
import MySelect from "../MySelect/MySelect";
import * as Yup from "yup";
import {Field, Form, Formik} from 'formik'
import {moviesAPI} from "../../services/MoviesService";
import axios from "axios";


const EditModal = ({active, setActive, movie}) => {
    const [selected, setSelected] = useState([])
    const [updateMovie, {}] = moviesAPI.useUpdateMovieMutation()

    const validationSchema = Yup.object().shape({
        title: Yup.string().typeError('value should be a string').required('This field is required'),
        releaseDate: Yup.string().typeError('value should be a string').required('This field is required'),
        movieUrl: Yup.string().typeError('value should be a string').required('This field is required'),
        genre: Yup.array().required('Select at least one of option'),
        overview: Yup.string().typeError('value should be a string').required('This field is required'),
        runtime: Yup.number().typeError('value should be a number').required('This field is required'),
    })

    const closeModal = useCallback((e) => {
        setActive(false)
    }, [setActive]);

    const notCloseOnContent = useCallback((e) => e.stopPropagation(), []);

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


    const onFormSubmit = useCallback(async (values) => {
        updateMovie(values)
            .unwrap()
            .then(() => {
                alert(values)
                setActive(false)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [updateMovie])

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
                    <h1 className={styles.heading}>Edit movie</h1>
                    <Formik
                        initialValues={
                            {
                                "title": movie.title,
                                "release_date": movie.release_date,
                                "poster_path": movie.poster_path,
                                "overview": movie.overview,
                                "runtime": +movie.runtime,
                                "genres": [
                                    "Comedy",
                                    "Drama",
                                    "Romance"
                                ],
                                "id": +movie.id
                            }
                        }
                        validateOnBlur
                        validationSchema={validationSchema}
                        onSubmit={(values) => onFormSubmit(values)}
                    >
                        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                            <form onSubmit={handleSubmit}>
                                <h2 className={styles.titleHeading}>Movie Id</h2>
                                <p className={styles.movieId}>{movie?.id}</p>
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
                                    placeholder="Movie URL here"
                                    type='url'
                                    value={values.poster_path.toString()}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.poster_path}
                                    errors={errors.poster_path}
                                />
                                <h2 className={styles.titleHeading}>
                                    Genre
                                </h2>
                                <Field as="select" name="genres">
                                    <option value='horror'>horror</option>
                                    <option value='comedy'>comedy</option>
                                    <option value='drama'>drama</option>
                                    <option value='thriller'>thriller</option>
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
                                    value={values.runtime}
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
                                        onClick={() => onFormSubmit(movie)}
                                        className={styles.button}>
                                        Save
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
        ;
};

export default EditModal;
