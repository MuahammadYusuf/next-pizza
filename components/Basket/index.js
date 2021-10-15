import React, {useMemo, useState} from 'react'
import cls from './basket.module.scss'
import {BackIcon, BlackBasket, DeleteIcon} from "../svg";
import Order from "../Order";
import Link from "next/link";
import {bindActionCreators} from "redux";
import {add, remove, increment, decrement, clear} from "../../redux/actions/basket";
import {connect} from "react-redux";
import Empty from "../Empty";

function Basket({basket, increment, decrement, remove, clear}) {
    const {totalPrice, totalAmount} = useMemo(() => {
        let totalAmount = 0, totalPrice = 0

        for (const item of basket.value) {
            totalAmount += item.amount
            totalPrice += item.amount * item.price
        }

        return {
            totalPrice,
            totalAmount
        }
    }, [basket.value])

    if (basket.value.length === 0) {
        return <Empty/>
    }


    async function postData(url = '') {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return response.json();
    }

    function handleSubmit() {
        const url = "https://api.telegram.org/bot2060291674:AAGDUjAQtoeVKyNExLagiRP6GoBazTlbEWo/sendMessage?chat_id=756657392&parse_mode=HTML&text="
        let result = ``
        const param = `%0A<b>Сумма заказа:</b> ${totalPrice} ₽  %0A<b>Всего пицц:</b> ${totalAmount} шт. %0A`

        for (const item of basket.value) {
            result += `${item.name} %0A${item.type} - ${item.size}см. %0A${item.amount}x${item.price}=${item.amount * item.price} ₽%0A%0A`
        }

        result += param

        postData(`${url}${result}`)
        clear()

    }

    return (
        <div className={cls.basket}>
            <div className={cls.header}>
                <div className={cls.leftSide}>
                    <BlackBasket/>
                    <h1>Корзина</h1>
                </div>
                <div className={cls.rightSide} onClick={clear}>
                    <DeleteIcon/>
                    <h1 className={cls.title}>Очистить корзину</h1>
                </div>
            </div>

            {basket?.value?.map((order, i) => <Order remove={() => remove(order.id)} order={order} key={i}
                                                     increment={() => increment(order)}
                                                     decrement={() => decrement(order)}/>)}
            <div className={cls.count}>
                <h1>Всего пицц: <strong>{totalAmount} шт.</strong></h1>
                <h1>Сумма заказа: <span>{totalPrice} ₽</span></h1>
            </div>
            <div className={cls.buttons}>

                <Link href="/">
                    <a>
                        <button className={cls.back}>
                            <BackIcon/>
                            Вернуться назад
                        </button>
                    </a>
                </Link>


                <button onClick={handleSubmit} className={cls.pay}>
                    Оплатить сейчас
                </button>
            </div>
        </div>
    )
}


const mapStateToProps = ({basket}) => ({
    basket
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({add, remove, increment, decrement, clear}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);