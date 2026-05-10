import { CircleMinus, CirclePlus, CircleUserRound, CreditCard, MapPinHouse, MoveLeft, MoveLeftIcon } from "lucide-react"
import { useContext, useState } from "react";
import { CartProduct } from "../../context/cartContext";
import { useCartStore } from "../../store/useCartStore";
import styles from "./checkout.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthStore } from "../../store/useAuthStore";
import { useReditect } from "../../hooks/useRedirect";

export const Checkout = () => {

    const navigate = useNavigate();

    const ProductCart = useCartStore((cartStore) => cartStore.cart);
    const totalPrice = ProductCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const RemoveProduct = useCartStore((remove) => remove.RemoveProduct);
    const AddQuantity = useCartStore((Add) => Add.AddQuantity);
    const Redirect = useReditect(ProductCart.length);

    const [OpenAddress, SetOpenAddress] = useState(false);
    const [OpenPayment, SetOpenPayment] = useState(false);

    const validation = UseAuthStore((validate) => validate.authenticated);
    const UserName = UseAuthStore((UserData) => UserData.username);


    const CompletedPurchase = (e) => {
        e.preventDefault();
        alert("Purchase completed successfully. Thanks for your preference.");
    }


    if (ProductCart.length === 0) {
        return (
            <div className={styles["cart-empty"]}>
                <p>The cart is empty. Redirecting to home in <span>{Redirect}</span></p>
                <Link to="/">Go to home now</Link>
            </div>
        );

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
                <form className={styles["Form-Container"]} onSubmit={CompletedPurchase}>

                    <div className={styles["additional-data"]} onClick={() => SetOpenAddress(!OpenAddress)}>
                        <MapPinHouse />
                        <span>Mailing Address</span>
                        <span className={styles.arrow}>{OpenAddress ? '▲' : '▼'}</span>
                        <div className={styles.direction} onClick={(e) => e.stopPropagation()}>
                            {
                                OpenAddress && (
                                    <div className={styles.FormConatiner}>
                                        <div className={styles["Form-Address"]}>
                                            <p>Direction: </p>
                                            <input type="text" name="address" placeholder="Enter the delivery address" required />
                                            <p>Zip Code: </p>
                                            <input type="text" name="ZipCode" pattern="[0-9]" inputMode="numeric" placeholder="Enter the postal code of the delivery location" required />
                                            <p>Full Name: </p>
                                            <input type="text" name="name" placeholder="Write your full name, Ej. Luciana Vizcarra" required />
                                            <p>Cell Number: </p>
                                            <input type="text" name="CellNumber" pattern="[0-9]" inputMode="numeric" maxLength={9} placeholder="Enter your phone number" required />
                                        </div>
                                    </div>
                                )}

                        </div>

                    </div>

                    <div className={styles["payment-method"]} onClick={() => SetOpenPayment(!OpenPayment)}>
                        <CreditCard />
                        <span>Payment Method</span>
                        <span className={styles.arrow}>{OpenPayment ? '▲' : '▼'}</span>

                        <div className={styles.payment} onClick={(e) => e.stopPropagation()}>
                            {
                                OpenPayment && (
                                    <div className={styles.PaymentConatiner}>
                                        <div className={styles["Form-payment"]}>
                                            <p>Card number: </p>
                                            <input type="text" name="NumberCard" pattern="[0-9]" inputMode="numeric" maxLength={16} placeholder="Enter card number" required />
                                            <p>Expiration Date: </p>
                                            <input type="mont" name="expiry" />
                                            <p>CVV: </p>
                                            <input type="text" name="CVV" pattern="[0-9]" inputMode="numeric" maxLength={3} required />
                                            <p>Full Name: </p>
                                            <input type="text" name="name" placeholder="Write your full name, Ej. Luciana Vizcarra" />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className={styles["make-purchase"]}>
                        <button type="submit">Buy</button>
                    </div>
                </form>
            </div>
        </div>
    )
}