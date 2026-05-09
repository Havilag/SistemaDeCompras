import { CircleMinus, CirclePlus, CircleUserRound, CreditCard, MapPinHouse, MoveLeft, MoveLeftIcon } from "lucide-react"
import { useContext, useState } from "react";
import { CartProduct } from "../../context/cartContext";
import { useCartStore } from "../../store/useCartStore";
import styles from "./checkout.module.css";
import { Link } from "react-router-dom";
import { UseAuthStore } from "../../store/useAuthStore";

export const Checkout = () => {

    const ProductCart = useCartStore((cartStore) => cartStore.cart);
    const totalPrice = ProductCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const RemoveProduct = useCartStore((remove) => remove.RemoveProduct);
    const AddQuantity = useCartStore((Add) => Add.AddQuantity);

    const [Open, SetOpen] = useState(false)

    const validation = UseAuthStore((validate) => validate.authenticated);
    const UserName = UseAuthStore((UserData) => UserData.username);


    if (ProductCart.length === 0) {
        return <p>El carrito está vacío</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Aura</h1>

                <div className={styles["login-container"]}>

                    {
                        validation ? (
                            <div className={styles.login}>
                                {UserName.username}
                                <CircleUserRound className={styles.user} />
                            </div>
                        ) : (
                            <Link to="/" className={styles.login}>
                                Login
                                <CircleUserRound className={styles.user} />
                            </Link>
                        )

                    }
                </div>
            </div>

            <div className={styles.MainContainer}>

                <Link to="/home" className={styles.GoBack}>
                    <MoveLeftIcon />
                    Regresar
                </Link>

                <div className={styles.purchase}>
                    <ul>
                        {
                            ProductCart.map((summary) => (
                                <li key={summary.id} className={styles["list-product"]}>
                                    <img src={summary.image} />
                                    <div className={styles["product-info"]}>
                                        <h2>{summary.title}</h2>

                                        <div className={styles.quantity}>
                                            <CircleMinus className={styles["button-icon"]} onClick={() => RemoveProduct(summary.id)} />
                                            <p>quantity: {summary.quantity}</p>
                                            <CirclePlus className={styles["button-icon"]} onClick={() => AddQuantity(summary.id)} />
                                        </div>
                                    </div>
                                    <p className={styles.subTotal}>SubTotal: ${(summary.quantity * summary.price).toFixed(2)}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={styles["Total-Cost"]}>
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>
                    </div>
                </div>

                <div className={styles["additional-data"]} onClick={() => SetOpen(!Open)}>
                    <MapPinHouse />
                    <span>Mailing Address</span>
                    <span className={styles.arrow}>{Open ? '▲' : '▼'}</span>
                    <div className={styles.direction} >
                        {
                            Open && (
                                <div className={styles.FormConatiner}>
                                    <form className={styles["Form-Address"]}>
                                        <p>Direction: </p>
                                        <input type="text" name="address" placeholder="Enter the delivery address" />
                                        <p>Zip Code: </p>
                                        <input type="number" name="ZipCode" placeholder="Enter the postal code of the delivery location" />
                                        <p>Full Name: </p>
                                        <input type="text" name="name" placeholder="Write your full name, Ej. Luciana Vizcarra" />
                                        <p>Cell Number: </p>
                                        <input type="number" name="CellNumber" placeholder="Enter your phone number" />
                                    </form>
                                </div>
                            )}

                    </div>

                </div>

                <div className={styles["payment-method"]} onClick={() => SetOpen(!Open)}>
                    <CreditCard />
                    <span>Payment Method</span>
                    <span className={styles.arrow}>{Open ? '▲' : '▼'}</span>

                    <div className={styles.payment}>
                        {
                            Open && (
                                <div className={styles.PaymentConatiner}>
                                    <form className={styles["Form-payment"]}>
                                        <p>Card number: </p>
                                        <input type="number" name="NumberCard" placeholder="Enter card number" />
                                        <p>Expiration Date: </p>
                                        <input type="mont" name="expiry" />
                                        <p>CVV: </p>
                                        <input type="number" name="CVV" />
                                        <p>Full Name: </p>
                                        <input type="text" name="name" placeholder="Write your full name, Ej. Luciana Vizcarra" />
                                    </form>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className={styles["make-purchase"]}>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}