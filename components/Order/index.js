import React from 'react'

import cls from './order.module.scss'
import {Abolition, AddIcon, MinusIcon} from "../svg";


export default function Order({order, increment, decrement, remove}) {
    return (
        <div className={cls.order}>
            <div className={cls.leftSide}>
                <img src={order.img} width={80} height={80}/>
                <div className={cls.titles}>
                    <h1 className={cls.title}>{order.name}</h1>
                    <p className={cls.description}>{order.type} - {order.size}см.</p>
                </div>
            </div>
            <div className={cls.rightSide}>
                < div className={cls.multiplication}>
                    <button className={cls.myButton} onClick={decrement}>
                        <MinusIcon/>
                    </button>
                    <p className={cls.value}>{order.amount}</p>
                    <button className={cls.myButton} onClick={increment}>
                        <AddIcon/>
                    </button>
                </div>
                <h1 className={cls.price}>{order.price * order.amount} ₽ </h1>
                <button className={cls.abolition} onClick={remove}>
                    <Abolition/>
                </button>
            </div>
        </div>
    )
}
