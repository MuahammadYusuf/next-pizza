import React from 'react';
import cls from './button.module.scss'

export default function Button({title,key,active, onClick}) {
    return (
        <button key={key} onClick={onClick} className={`${cls.myButton} ${active ? cls.active : ''}`}>
            {title}
        </button>
    );
}
