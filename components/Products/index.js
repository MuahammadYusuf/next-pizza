import React, {useMemo} from 'react'
import cls from './products.module.scss'
import Product from "../Product";
import productMock from '../../mock-data/product'
import { bindActionCreators } from 'redux'
import {connect} from "react-redux";
import {add, remove} from "../../redux/actions/basket";

function Products({category, sortBy, add, basket,cart, handleAdd}) {
    const products = useMemo(() => {
        return productMock.filter(data => category.category === 'all' ? data : data.category === category.id).sort((a, b) => {
            if (sortBy.id === 2) {
                return a.price - b.price
            } else if (sortBy.id === 3) {
                return a.title > b.title ? 1 : -1
            }

            return 0
        })
    }, [category, sortBy])

    return (
        <div className={cls.products}>
            <h1 className={cls.title}>
                Все пиццы
            </h1>
            <div className={cls.myProduct}>
                {products.map((data, i) => {
                    const amount = basket.value?.filter(item => item.id === data.id).reduce((a,b) => a + b.amount, 0)

                    return (
                        <Product
                            key={i}
                            data={data}
                            onClick={add}
                            amount={amount}
                            handleAdd={handleAdd}
                        />
                    )
                })}
            </div>

        </div>
    )
}

const mapStateToProps = ({basket}) => ({
    basket
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ add, remove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
