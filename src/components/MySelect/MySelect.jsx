import React, {useCallback, useState} from 'react';
import styles from './MySelect.module.scss'
import {ArrowDropDown} from "@mui/icons-material";

const MySelect = ({options, selected, toggleOption}) => {

    const [openedList, setOpenedList] = useState(false);

    const onClickArrowDropDown = useCallback(() => openedList === false ? setOpenedList(true) : setOpenedList(false), [openedList]);


    return (
        <>
            {/*<h2 className={styles.heading}>*/}
            {/*    GENRE*/}
            {/*</h2>*/}

            <div className={styles.selectDropDown}>
                <div className={styles.selected}>
                    <div>Select Genre</div>
                    {openedList === true && <ArrowDropDown
                        onClick={onClickArrowDropDown}
                        style={{
                            fontSize: '3rem',
                            color: '#F65261',
                            position: "absolute",
                            top: '27%',
                            right: '3%',
                            cursor: 'pointer',
                            transform: 'rotate(180deg)'
                        }}
                    />}
                    {openedList === false && <ArrowDropDown
                        onClick={onClickArrowDropDown}
                        style={{
                            fontSize: '3rem',
                            color: '#F65261',
                            position: "absolute",
                            cursor: 'pointer',
                            top: '27%',
                            right: '3%'
                        }}
                    />}
                </div>
                {openedList === true && <ul className={styles.optionsDropDown}>
                    {options.map(option => {
                        const isSelected = selected.includes(option.id);
                        return (
                            <li className={styles.cmultiselectdropdown__option}
                                onClick={() => toggleOption({id: option.id})}>
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    className={styles.checkbox}/>
                                <span>{option.label}</span>
                            </li>
                        )
                    })}
                </ul>}
            </div>
        </>
    );
};

export default MySelect;
