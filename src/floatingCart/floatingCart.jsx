import { useContext } from "react";
import { CartProduct } from "../context/cartContext"
import styles from "./floatingCart.module.css"

export const FloatingCart = ({CloseCart}) => {

    const { product } = useContext(CartProduct);

    return (
        <div onClick={CloseCart} className={styles.container}>
            <ul className={styles["product-cart"]}>
                {
                    product.map((productAdd) => (
                        <li key={productAdd.id}>
                            <img src={productAdd.image} />
                            <p>{productAdd.title}</p>
                            <p>Precio: ${productAdd.price}</p>
                            <p>Cantidad: {productAdd.quantity}</p>
                            <p>Total: {(productAdd.quantity * productAdd.price).toFixed(2)}</p>
                        </li>
                    ))
                }
            </ul>
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