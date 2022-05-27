import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    title: Yup.string().typeError('value should be a string').required('This field is required'),
    release_date: Yup.string().typeError('value should be a string').required('This field is required'),
    poster_path: Yup.string().typeError('value should be a string').required('This field is required'),
    genres: Yup.array().required('Select at least one of option'),
    overview: Yup.string().typeError('value should be a string').required('This field is required'),
    runtime: Yup.number().typeError('value should be a number').required('This field is required'),
})
