import React, {useCallback, useState} from 'react';
import {Form, Formik} from 'formik'

import styles from './Modals.module.scss'
import MyInput from "../UI/MyInput/MyInput";
import {movies} from "../Helpers/data";
import MySelect from "../UI/MySelect/MySelect";
import {moviesAPI} from "../../services/MoviesService";
import {validationSchema} from "../Helpers/validationSchema";


const EditModal = ({active, setActive, movie}) => {

    const [selected, setSelected] = useState([])
    const [updateMovie, {}] = moviesAPI.useUpdateMovieMutation()

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
                setActive(false)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [setActive, updateMovie])

    return (
        <div
            className={active ? styles.modal : styles.hideModal}
            onClick={closeModal}
            data-testid='editModal'
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
                                "genres": movie.genres,
                                "id": +movie.id
                            }
                        }
                        validateOnBlur
                        validationSchema={validationSchema}
                        onSubmit={(values) => onFormSubmit(values)}
                        validator={() => ({})}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleBlur,
                              isValid,
                              handleSubmit,
                              dirty,
                              setFieldValue
                          }) => (
                            <Form onSubmit={handleSubmit}>
                                <h2 className={styles.titleHeading}>Movie Id</h2>
                                <p className={styles.movieId}>{movie?.id}</p>
                                <MyInput
                                    title="title"
                                    placeholder="Your Title"
                                    name='title'
                                    value={values.title.toString()}
                                    onBlur={handleBlur}
                                    onChange={(newValue) => {
                                        setFieldValue('title', newValue.target.value)
                                    }}
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
                                    onChange={(newValue) => {
                                        setFieldValue('release_date', newValue.target.value)
                                    }}
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
                                    onChange={(newValue) => {
                                        setFieldValue('poster_path', newValue.target.value)
                                    }}
                                    touched={touched.poster_path}
                                    errors={errors.poster_path}
                                />
                                <h2 className={styles.titleHeading}>
                                    Genre
                                </h2>
                                <MySelect
                                    options={movies}
                                    values={values.genres}
                                    selected={selected}
                                    toggleOption={toggleOption}
                                />
                                <MyInput
                                    title="overview"
                                    name='overview'
                                    placeholder="Overview here"
                                    value={values.overview.toString()}
                                    onBlur={handleBlur}
                                    onChange={(newValue) => {
                                        setFieldValue('overview', newValue.target.value)
                                    }}
                                    touched={touched.overview}
                                    errors={errors.overview}
                                />
                                <MyInput
                                    title="runtime"
                                    name='runtime'
                                    type='text'
                                    placeholder="Runtime here"
                                    value={values.runtime}
                                    onBlur={handleBlur}
                                    onChange={(newValue) => {
                                        setFieldValue('runtime', newValue.target.value)
                                    }}
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
                                        onClick={() => onFormSubmit(values)}
                                        className={styles.button}>
                                        Save
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
        ;
};

export default EditModal;
