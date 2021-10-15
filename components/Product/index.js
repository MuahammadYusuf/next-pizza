import React, { useState} from 'react'
import cls from './product.module.scss'
import Add from "../Add";

export default function Product({data, onClick, amount}) {
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    const [price, setPrice] = useState(data?.price?.[0])

    function onSizeChange(index) {
        setActiveSize(index)
        setPrice(data?.price?.[index])
    }

    function productAddHandler(){
        onClick({
            ...data,
            size: data.sizes[activeSize],
            type: data.types[activeType],
            price:price
        })
    }

    return (
       <div className={cls.product}>
           <div className={cls.header}>
               <img src={data.img} width={260} height={260}/>
               <div className={cls.title}>{data.name}</div>
           </div>

           <div className={cls.body}>
               <div className={cls.titles}>
                   {
                       data.types?.map((type, index) => (
                           <button onClick={() => setActiveType(index)} key={index}
                                   className={`${cls.myButton} ${activeType === index? cls.active : ''}`}>{type}</button>
                       ))
                   }
               </div>

               <div className={cls.titles}>
                   {data.sizes.map((size, index) => (
                       <button onClick={() => onSizeChange(index)} key={index} className={`${cls.myButton} ${activeSize === index? cls.active : ''}`}>{size} см.</button>
                   ))}

               </div>

           </div>

           <div className={cls.footer}>
               <p className={cls.price}>{price} ₽</p>
               <Add onClick={() => productAddHandler()} amount={amount}/>
           </div>
       </div>
    )
}
