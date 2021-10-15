import React, {useState} from 'react'
import Navbar from "../Navbar";
import cls from '../../styles/index.module.scss'
import TopFilter from "../Filter";
import Products from "../Products";

export default function Homepage() {
    const [category, setCategory] = useState('all')

    return (
        <div className={cls.homePage}>
            <div className='container '>
                <Navbar/>
                <TopFilter setCtg={setCategory}/>
                <Products ctg={category} />
            </div>
        </div>
    )
}
