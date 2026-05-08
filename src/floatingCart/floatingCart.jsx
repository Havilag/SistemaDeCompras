import { useContext, useState } from "react";
import { CartProduct } from "../context/cartContext"
import styles from "./floatingCart.module.css"
import { Link } from "react-router-dom";

export const FloatingCart = ({CloseCart}) => {

    const { product } = useContext(CartProduct);

    const totalPrice = product.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div onClick={CloseCart} className={styles.container}>
            <ul className={styles["product-cart"]}>
                {
                    product.map((productAdd) => (
                        <li key={productAdd.id}>
                            <img src={productAdd.image} />
                            <p>{productAdd.title}</p>
                            <p>Price: ${productAdd.price}</p>
                            <p>Quantity: {productAdd.quantity}</p>
                            <p>SubTotal: {(productAdd.quantity * productAdd.price).toFixed(2)}</p>
                        </li>
                    ))
                }
            </ul>
            <p>Total: {totalPrice}</p>
            <Link className={styles.Buy} to="/checkout">Buy</Link>
         
            {
                product.length === 0 ? (
                    <p>No hay productos aún.</p>
                ) : (
                    null
                )
            }
        </div>
    )
}