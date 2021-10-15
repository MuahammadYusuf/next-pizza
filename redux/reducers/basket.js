import {ADD_ITEM, REMOVE_ITEM, INCREMENT_AMOUNT, DECREMENT_AMOUNT, CLEAR_BASKET} from '../actions/basket';

const initialValue = {
    value: []
}

const basketReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const value = [...state.value]

            const item = value?.find((item) => item.id === action.payload.id && item.type === action.payload.type && item.size === action.payload.size)

            if (item) {
                const itemIndex = value?.indexOf(item)

                value[itemIndex].amount += 1

                return {...state, value}
            }

            value.push({
                ...action.payload,
                amount: 1
            })

            return {...state, value};
        }
        case REMOVE_ITEM: {
            const value = [...state.value]

            const item = value?.find((item) => item.id === action.payload.id)

            if (item) {
                const itemIndex = value?.indexOf(item)

                value.splice(itemIndex, 1)

                return {...state, value}
            }

            return {...state};
        }
        case INCREMENT_AMOUNT: {
            const value = [...state.value]

            const item = value?.find((item) => item.id === action.payload.id && item.type === action.payload.type && item.size === action.payload.size)

            if (item) {
                const itemIndex = value?.indexOf(item)

                value[itemIndex].amount += 1

                return {...state, value}
            }

            return {...state};
        }
        case DECREMENT_AMOUNT: {
            const value = [...state.value]

            const item = value?.find((item) => item.id === action.payload.id && item.type === action.payload.type && item.size === action.payload.size)

            if (item) {
                const itemIndex = value?.indexOf(item)

                const amount = value[itemIndex].amount - 1
                value[itemIndex].amount = amount > 0 ? amount : 1

                return {...state, value}
            }

            return {...state};
        }
        case CLEAR_BASKET : {
            return {...state, value: []}
        }
        default:
            return {...state};
    }
};

export default basketReducer;