import { combineReducers } from 'redux';
import reduceList from './reducer_list';

const rootReducer = combineReducers ({
    list: reduceList,
});

export default rootReducer;
