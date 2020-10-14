import {ACTION_TYPES} from "../actions/types";


const cartInitialState = [];


export default function cardReducer(state = cartInitialState, action){
    switch (action.type) {
        case ACTION_TYPES.ADD_CART:
            return state.includes(action.payload) ? state :[...state, action.payload]
        case ACTION_TYPES.REMOVE_CART:
            return state.filter(prod => prod.id !== action.payload.id)
        default:
            return state
    }
}