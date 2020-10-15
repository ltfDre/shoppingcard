import React from "react";

import { useSelector } from "react-redux";
const productProps = {
    src: "https://i.hizliresim.com/E585dZ.jpg",
    desc: "Apple iPhone 11 Pro Max Smart Phone, 32 GB, Silver",
    price: "Price: £600"
}
const styles = {
    box: {
        width: '%10',
        height: '%10',
        backgroundColor: "whitesmoke",
        display: "flex",
        alignItems: "center",
        border: "1px solid #82BBD7",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
        marginTop: "50px",
        marginBottom: "10px",
    },
    image: {
        maxWidth: '90%'
    },
    productDetail: {
        width: "auto",
        fontSize: "1.2rem",
        color: "black",
        marginBottom: "20px"
    },
    productPrice: {
        fontSize: "20px",
        display: "flex",
        padding: "20px",
        fontWeight: "bold",
        color: "#424648",
        border: "1px solid #0474bc",
        width: "100px",
        margin: "10px"
    },
    button: {
        width: "%100",
        height: "50px",
        boxShadow: "0px",
        padding: "10px",
        backgroundColor: "#82BBD7",
        border: "0px solid",
        color: "#FFFF", 
        transition: "2s"
    },
    deleteButton: {
        width: "%100",
        height: "50px",
        boxShadow: "0px",
        padding: "10px",
        backgroundColor: "#FAAC5A",
        border: "0px solid",
        color: "#FFFF", 
        transition: "2s"
    }

}

export default function ProdcutBox({ product, onAdd, onDelete }) {

    const cart = useSelector(state => state.cart);
    return <div style={styles.box}>
        <div style={styles.productDetail}>
            <img style={styles.image} src={productProps.src} alt="image" />
            <span>{productProps.desc}</span>
            <span style={styles.productPrice}>{productProps.price}</span>
        </div>

        {cart.includes(product) ?
            <button onClick={onDelete} style={styles.deleteButton}>Remove</button>
            :
            <button onClick={onAdd} style={styles.button}>Add To Cart</button>}

    </div>
}