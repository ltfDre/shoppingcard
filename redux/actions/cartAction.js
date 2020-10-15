import {ACTION_TYPES} from "../actions/types";

function addCartAction(product){
    return (dispatch)=>{
        dispatch({
            type: ACTION_TYPES.ADD_CART,
            payload: product
        })
    }
}

function deleteCartAction(product){
    return (dispatch)=>{
        dispatch({
            type: ACTION_TYPES.REMOVE_CART,
            payload: product
        })
    }
}

export {addCartAction, deleteCartAction};
