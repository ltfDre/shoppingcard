import { combineReducers } from 'redux';
// import foo from "foo/bar"
import cardReducer from './cartReducer';

export default combineReducers({
    cart: cardReducer
});
