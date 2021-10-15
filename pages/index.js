import React, {useState} from "react";

import Navbar from "../components/Navbar";
import TopFilter from "../components/Filter";
import Products from "../components/Products";

import cls from "../styles/index.module.scss";

function Home({basket}) {
    const categoryFilters = [
        {
            id: 0,
            title: 'Все',
            category: 'all'
        },
        {
            id: 1,
            title: 'Мясные',
            category: 'meat'
        },
        {
            id: 2,
            title: 'Вегетарианская',
            category: 'Vegetarian'
        },
        {
            id: 3,
            title: 'Гриль',
            category: 'chicken'
        },
        {
            id: 4,
            title: 'Острые',
            category: 'Sharp',
        },
        {
            id: 5,
            title: 'Закрытые',
            category: 'Closed'
        },
    ]

    const sortFilters = [
       {
            id: 2,
            title: 'по цене'
        }, {
            id: 3,
            title: 'по алфавиту'
        }
    ]

    const [category, setCategory] = useState(categoryFilters[0])
    const [sortBy, setSortBy] = useState(sortFilters[0]);
    const [cart,setCart] =useState([])

    function handleAddFromBasket(i){

        const value = [...cart]

        const item = value?.find((item) => item.id === i.id && item.type === i.type && item.size === i.size)

        if (item) {
            const itemIndex = value?.indexOf(item)

            value[itemIndex].amount += 1

            setCart(value)
        }else{
            const arr = [...value,{...i, amount:1}]
            console.log(arr,'arr')
            setCart(arr)
        }

    }

    console.log(cart)
    return (
        <div className={cls.homePage}>
            <div className='container '>
                <Navbar />
                <TopFilter categories={categoryFilters} sorts={sortFilters} sortBy={sortBy} setSortBy={setSortBy} category={category} setCategory={setCategory}/>
                <Products category={category} sortBy={sortBy} handleAdd={handleAddFromBasket} />
            </div>
        </div>
    )
}

export default Home