import { CircleUserRound } from "lucide-react"
import { useContext } from "react";
import { CartProduct } from "../../context/cartContext";


export const Checkout = () => {

    const { product } = useContext(CartProduct);
    const totalPrice = product.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Aura</h1>

                <div className={styles.login}>
                    <button className={styles.Login}>
                        Login
                        <CircleUserRound className={styles.user} />
                    </button>
                </div>
            </div>

            <div className={styles.purchase}>
                <ul>
                    {
                        product.map((summary) =>(
                            <li key={summary.id} className={styles["list-product"]}>
                                <img src={summary.image} />
                                <h2>{summary.title}</h2>
                                <p>quantity: {summary.quantity}</p>
                                <p>SubTotal: {(productAdd.quantity * productAdd.price).toFixed(2)}</p>
                            </li>
                        ))
                    }
                </ul>
                <h2>Total: {totalPrice}</h2>
        
            </div>


        </div>
    )
}