import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import cls from './empty.module.scss'

export default function Empty() {

    return (
      <div className={cls.empty}>
          <h1>Корзина пустая </h1>
          <p>Вероятней всего, вы не заказывали ещё пиццу.
              Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
          <Image className={cls.img} src={'/images/empty.png'} width={300} height={250}/>

          <Link href="/">
              <a className={cls.link}>
                  <button className={cls.myButton}>Вернуться назад</button>
              </a>
          </Link>
      </div>
    )
}


