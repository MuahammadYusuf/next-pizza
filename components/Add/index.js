import React from 'react';
import cls from './add.module.scss'
import {PlusIcon} from "../svg";

export default function Add({onClick, amount}) {
    return (
        <>
            <button className={cls.add} onClick={onClick}>
                <PlusIcon/>Добавит <span className={`${cls.number} ${amount ? cls.my :''}`}>{amount ?? ''}</span>
            </button>
        </>
    );
}
