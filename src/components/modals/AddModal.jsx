import React, {useCallback} from 'react';
import styles from './modals.module.scss'
import MyInput from "../MyInput/MyInput";
import {movies} from "./data";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import {moviesAPI} from "../../services/MoviesService";

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

const customStyles = {
    control: () => ({
        width: '100%',
        background: 'rgba(50, 50, 50, 0.5)',
    }),
}

const AddModal = ({active, setActive}) => {

    const closeModal = useCallback(()=> setActive(false), [setActive]);
    const notCloseOnContent = useCallback((e)=> e.stopPropagation(), []);

    const [createMovie, {}] = moviesAPI.useCreateMovieMutation({});

    const handleCreateMovie = useCallback(async (e) => {
        e.preventDefault();
        const movieData = prompt('')
        await createMovie({movieData, body: movieData});
    }, [closeModal, createMovie])

    return (
        <div id="AddModal" className={active ? styles.modal : styles.hideModal} onClick={closeModal}>

            <div className={styles.modalContent} onClick={notCloseOnContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <div className={styles.modalBody}>
                    <h1 className={styles.heading}>ADD movie</h1>
                    <form className={styles.row} onSubmit={handleCreateMovie}>
                        <MyInput title="title" placeholder="Your Title"/>
                        <MyInput title="release date" type="date" placeholder="Select Date" />
                        <MyInput title="movie url" placeholder="Movie URL here"/>
                        <h2 className={styles.titleHeading}>Genre</h2>
                        <ReactSelect
                            options={movies}
                            isMulti
                            styles={customStyles}
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            components={{
                                Option
                            }}
                            // onChange={this.handleChange}
                            allowSelectAll={true}
                            // value={this.state.optionSelected}
                        />
                        <MyInput title="overview" placeholder="Overview here"/>
                        <MyInput title="runtime" placeholder="Runtime here"/>
                        <div className={styles.buttons}>
                            <button value='confirm' className={styles.button2}>Reset</button>
                            <button type="submit" className={styles.button}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddModal;
