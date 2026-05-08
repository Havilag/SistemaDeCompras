import { CircleMinus, CirclePlus, CircleUserRound } from "lucide-react"
import { useContext } from "react";
import { CartProduct } from "../../context/cartContext";
import { useCartStore } from "../../store/useCartStore";
import styles from "./checkout.module.css";

export const Checkout = () => {

    const ProductCart = useCartStore((cartStore) => cartStore.cart);
    const totalPrice = ProductCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const RemoveProduct = useCartStore((remove) => remove.RemoveProduct);
    const AddQuantity = useCartStore((Add) => Add.AddQuantity);

    if (ProductCart.length === 0) {
        return <p>El carrito está vacío</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Aura</h1>

                <div className={styles["login-container"]}>
                    <button className={styles.login}>
                        Login
                        <CircleUserRound className={styles.user} />
                    </button>
                </div>
            </div>

            <div className={styles.purchase}>
                <ul>
                    {
                        ProductCart.map((summary) => (
                            <li key={summary.id} className={styles["list-product"]}>
                                <img src={summary.image} />
                                <div className={styles["product-info"]}>
                                    <h2>{summary.title}</h2>
                                    
                                    <div className={styles.quantity}>
                                        <CircleMinus className={styles["button-icon"]} onClick={() => RemoveProduct(summary.id)}/>
                                        <p>quantity: {summary.quantity}</p>
                                        <CirclePlus className={styles["button-icon"]} onClick={() => AddQuantity(summary.id)}/>
                                    </div>
                                </div>
                                <p className={styles.subTotal}>SubTotal: {(summary.quantity * summary.price).toFixed(2)}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className={styles["Total-Cost"]}>
                    <h2>Total: {totalPrice.toFixed(2)}</h2>
                </div>
            </div>


        </div>
    )
}