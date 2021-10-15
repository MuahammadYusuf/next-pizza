import React, {useState} from 'react';
import cls from './filter.module.scss'
import Button from "../Button";
import {BottomIcon} from "../svg";

export default function TopFilter({categories, category, setCategory, sorts, sortBy, setSortBy}) {
    const [isOpen, setOpen] = useState(false)

    function handleCtgClick(category) {
        setCategory(category)
    }

    function handleSortClick(sort){
        setSortBy(sort)
        setOpen(false)
    }


    return (
        <div className={cls.topFilter}>
            <div className={cls.leftSide}>
                {categories.map((item, index) => (
                    <Button
                        onClick={() => handleCtgClick(item)}
                        active={category.category === item.category} key={index}
                        title={item.title}/>
                ))
                }
            </div>
            <div className={cls.rightSide}>
                <div onClick={() => setOpen(!isOpen)} className={`${cls.title} ${isOpen && cls.opened}`}>
                    <BottomIcon/>
                    Сортировка по: <span>{sortBy?.title}</span>

                </div>
                {
                    isOpen &&
                    <div className={cls.filterBox}>
                        {
                            sorts.map((item, index) => (
                                <p className={cls.filterTitle} key={item.id} onClick={() => handleSortClick(item)}>{item.title}</p>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
}
