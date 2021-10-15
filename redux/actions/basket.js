//Action Types
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREMENT_AMOUNT = "INCREMENT_AMOUNT";
export const DECREMENT_AMOUNT = "DECREMENT_AMOUNT";
export const CLEAR_BASKET = "CLEAR_BASKET";

export const add = (data) => ({
    type: ADD_ITEM,
    payload: data
});

export const remove = (id) => ({
    type: REMOVE_ITEM,
    payload: {id}
});

export const increment = (item) => ({
    type: INCREMENT_AMOUNT,
    payload: item
});

export const decrement = (item) => ({
    type: DECREMENT_AMOUNT,
    payload: item
});

export const clear = () => ({
    type: CLEAR_BASKET,
});