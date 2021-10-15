import basketReducer from './basket';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    basket: basketReducer
});

export default rootReducer;