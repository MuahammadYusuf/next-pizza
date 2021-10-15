import React, {useMemo} from 'react';
import cls from './navbar.module.scss'
import Image from "next/image";
import Link from 'next/link'
import {BasketIcon} from "../svg";
import {useRouter} from "next/router";
import {connect} from "react-redux";

function Navbar({basket}) {
    const router = useRouter()

    const {totalPrice, totalAmount} = useMemo(() => {
        let totalAmount = 0, totalPrice = 0;

        basket.value.forEach(item=>{
            totalAmount += item.amount
            totalPrice += item.amount * item.price
        })



        return {
            totalPrice,
            totalAmount
        }
    }, [basket.value])

    console.log(basket,'basket')

    return (
        <div className={cls.navbar}>
            <div className={cls.icon}>
                <div className={cls.pizzaIcon}><Image src={'/images/pizza-icon.png'} width={38} height={38}/></div>
                <div className={cls.title}>
                    <h1>REACT PIZZA</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            {router.asPath !== '/basket' && <button className={cls.myButton}>
                <Link href="/basket">
                    <a className={cls.link}>
                        <h4 className={cls.title}>{totalPrice} <span>₽</span></h4>
                        <div className={cls.wall}/>
                        <div className={cls.basketIcon}>
                            <BasketIcon/>
                            <p className={cls.title}>{ basket.value.length }</p>
                        </div>
                    </a>
                </Link>
            </button>}
        </div>
    );
}

const mapStateToProps = ({basket}) => ({
    basket
});

export default connect(mapStateToProps)(Navbar);
