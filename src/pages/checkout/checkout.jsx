import { CircleMinus, CirclePlus, CircleUserRound, CreditCard, MapPinHouse, MoveLeft, MoveLeftIcon } from "lucide-react"
import { CheckCircle, FileText } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useContext, useState } from "react";
import { CartProduct } from "../../context/cartContext";
import { useCartStore } from "../../store/useCartStore";
import styles from "./checkout.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthStore } from "../../store/useAuthStore";
import { useReditect } from "../../hooks/useRedirect";
import { PurchaseSummary } from "../../components/reports/purchase-summary";
import { Footer } from "../../components/footer/footer";

export const Checkout = () => {

    const navigate = useNavigate();

    const ProductCart = useCartStore((cartStore) => cartStore.cart);
    const totalPrice = ProductCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const RemoveProduct = useCartStore((remove) => remove.RemoveProduct);
    const AddQuantity = useCartStore((Add) => Add.AddQuantity);
    const WaitTime = useReditect(ProductCart.length);

    const [AddressVisible, SetAddressVisible] = useState(false);
    const [PaymentVisible, SetPaymentVisible] = useState(false);

    const [OrderFinished, SetOrderFinished] = useState(false);
    const [SummaryData, setSummaryData] = useState(null);

    const ValidationLogin = UseAuthStore((validate) => validate.authenticated);
    const UserName = UseAuthStore((UserData) => UserData.username);
    const EmptyCart = useCartStore((clear) => clear.clearCart);

    const CompletedPurchase = (e) => {

        e.preventDefault();

        if (!AddressVisible || !PaymentVisible) {
            alert("Please open and fill out both Address and Payment sections.");
            return;
        }

        const data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        console.log("Datos capturados:", values);

        const IncompleteForm = Object.values(values).some(val => typeof val === "string" && val.trim() === "");

        if (IncompleteForm) {
            alert("Please fill in all the required={AddressVisible} fields");
            return;
        }


        setSummaryData({
            products: [...ProductCart],
            total: totalPrice,
            userName: UserName.username,
            shipping: values
        });

        SetOrderFinished(true);
    }




    if (ProductCart.length === 0 && !OrderFinished) {
        return (
            <div className={styles["cart-empty"]}>
                <p>The cart is empty. Redirecting to home in <span>{WaitTime}</span></p>
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
                        ValidationLogin ? (
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
                {OrderFinished ? (

                    <div className={styles["Container-PDF"]}>
                        <CheckCircle size={80} color="#10b981" />
                        <h2>Purchase Completed Successfully</h2>
                        <p>Your order has been processed correctly</p>

                        <div className={styles.Download}>
                            <FileText size={40} color="#6366f1" />
                            <p>Click below to download your receipt</p>

                            <PDFDownloadLink
                                document={<PurchaseSummary {...SummaryData} />}
                                fileName={`Purachase_Summary_${UserName.username}.pdf`}
                                className={styles.DownloadLink}
                            >
                                {({ loading }) => (loading ? "Generando..." : "Descargar Resumen PDF")}
                            </PDFDownloadLink>
                        </div>

                        <button
                            className={styles.FinishBtn}
                            onClick={() => {
                                EmptyCart();
                                navigate("/");
                            }}
                        >
                            Finalizar y Volver a la Tienda
                        </button>
                    </div>
                ) : (<>
                    <Link to="/" className={styles.GoBack}>
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

                        <div className={styles["additional-data"]} onClick={() => SetAddressVisible(!AddressVisible)}>
                            <MapPinHouse />
                            <span>Mailing Address</span>
                            <span className={styles.arrow}>{AddressVisible ? '▲' : '▼'}</span>
                            <div className={styles.direction} onClick={(e) => e.stopPropagation()}>
                                {
                                    AddressVisible && (
                                        <div className={styles.FormConatiner}>
                                            <div className={styles["Form-Address"]}>
                                                <p>Direction: </p>
                                                <input type="text" name="address" placeholder="Enter the delivery address" required={AddressVisible} />
                                                <p>Zip Code: </p>
                                                <input type="text" name="ZipCode" pattern="[0-9]+" inputMode="numeric" placeholder="Enter the postal code of the delivery location" required={AddressVisible} />
                                                <p>Full Name: </p>
                                                <input type="text" name="name" placeholder="Write your full name, Ej. Luciana Vizcarra" required={AddressVisible} />
                                                <p>Cell Number: </p>
                                                <input type="text" name="CellNumber" pattern="[0-9]+" inputMode="numeric" maxLength={9} placeholder="Enter your phone number" required={AddressVisible} />
                                            </div>
                                        </div>
                                    )}

                            </div>

                        </div>

                        <div className={styles["payment-method"]} onClick={() => SetPaymentVisible(!PaymentVisible)}>
                            <CreditCard />
                            <span>Payment Method</span>
                            <span className={styles.arrow}>{PaymentVisible ? '▲' : '▼'}</span>

                            <div className={styles.payment} onClick={(e) => e.stopPropagation()}>
                                {
                                    PaymentVisible && (
                                        <div className={styles.PaymentConatiner}>
                                            <div className={styles["Form-payment"]}>
                                                <p>Card number: </p>
                                                <input type="text" name="NumberCard" pattern="[0-9]+" inputMode="numeric" maxLength={16} placeholder="Enter card number" required={AddressVisible} />
                                                <p>Expiration Date: </p>
                                                <input type="month" name="expiry" />
                                                <p>CVV: </p>
                                                <input type="text" name="CVV" pattern="[0-9]+" inputMode="numeric" maxLength={3} required={AddressVisible} />
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
                </>)}
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}