import React from "react";

import {useSelector} from "react-redux";
const styles = {
    box:{
        width: 100,
        height: 100,
        borderRadius: "7px",
        backgroundColor: "whitesmoke",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
        marginBottom: "10px"
    },
    productDetail:{
        fontSize: "1.2rem",
        color: "black",
        marginBottom: "20px"
    },
    button: {
        padding: "10px",
        backgroundColor:"blue",
        color: "#FFFF"
    },
    deleteButton:{
        padding: "10px",
        backgroundColor:"red",
        color: "#FFFF"
    }

}



export default function ProdcutBox({product, onAdd, onDelete}){

    const cart = useSelector(state => state.cart);
    return <div style={styles.box}>
        <div style={styles.productDetail}>
            {product.name}
        </div>
        
        {cart.includes(product) ?
        <button onClick={onDelete} style={styles.deleteButton}>Delete</button> 
            :
        <button onClick={onAdd} style={styles.button}>Add</button>}
        
    </div>
}