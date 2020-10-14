
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAction } from "../redux/actions/cartAction";
import Layout from "../components/layout";
export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const handleDeleteCart = (product) => {
        dispatch(deleteCartAction(product))
    }
    return <Layout> <ul>
        {cart.map(eachProd => {
            return <li>{eachProd.name}
                <button
                    style={{ backgroundColor: "red", color: "#FFF", marginLeft: "20px" }}
                    onClick={() => handleDeleteCart(eachProd)}
                >Remove</button>
            </li>
        })}
    </ul>
    </Layout>
}