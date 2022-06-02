import React, {useCallback, useState} from 'react';
import styles from './MySelect.module.scss'
import {ArrowDropDown} from "@mui/icons-material";

export const MySelect = ({options, selected, toggleOption, values}) => {

    const [openedList, setOpenedList] = useState(false);

    const onClickArrowDropDown = useCallback(() => openedList === false ? setOpenedList(true) : setOpenedList(false), [openedList]);


    return (
        <div>
            {/*<h2 className={styles.heading}>*/}
            {/*    GENRE*/}
            {/*</h2>*/}

            <div className={styles.selectDropDown}>
                <div className={styles.selected}>
                    <div>Select Genre</div>
                    {openedList === true && <ArrowDropDown
                        onClick={onClickArrowDropDown}
                        id={styles.arrowUp}
                    />}
                    {openedList === false && <ArrowDropDown
                        onClick={onClickArrowDropDown}
                        id={styles.arrowDown}
                    />}
                </div>
                {openedList === true && <ul className={styles.optionsDropDown}>
                    {options.map(option => {
                        const isSelected = selected.includes(option.id);
                        return (
                            <li className={styles.cmultiselectdropdown__option}
                                key={option.id}
                                onClick={() => {
                                    toggleOption({id: option.id})
                                    values.push(option.label)
                                }}>
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    readOnly
                                    className={styles.checkbox}/>
                                <span>{option.label}</span>
                            </li>
                        )
                    })}
                </ul>}
            </div>
        </div>
    );
};

