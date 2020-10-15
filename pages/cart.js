
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAction } from "../redux/actions/cartAction";
import Layout from "../components/layout";

const style = {
    removeButton: {
        width: "100px",
        cursor: "pointer",
        display: "inline",
        marginLeft: "10px",
        height: "40px",
        boxShadow: "0px",
        padding: "10px",
        backgroundColor: "#FAAC5A",
        border: "0px solid",
        color: "#FFFF",
    },
    title: {
        border: "1px solid #82BBD7",
        width: "500px",
        padding: "20px",
        margin: "20px"
    }
}
export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const handleDeleteCart = (product) => {
        dispatch(deleteCartAction(product))
    }
    return <Layout> <ul style={style.title}>
        {cart.length > 0 ? <h1>You have items: </h1> : <h1>There is no item here yet</h1>}
        {cart.map(eachProd => {
            return <li><h3>{eachProd.name}</h3>
                <button
                    style={style.removeButton}
                    onClick={() => handleDeleteCart(eachProd)}
                >Remove</button>
            </li>
        })}
    </ul>
    </Layout>
}