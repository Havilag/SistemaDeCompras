import styles from "./footer.module.css"

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles["grid-container"]}>
                <div className={styles.questions}>
                    <a href="#">How do I place an order at Aura?</a>
                    <a href="#">Do I need an account to complete a purchase?</a>
                    <a href="#">Where do you ship and what are the delivery times?</a>
                    <a href="#">How can I download my purchase receipt in PDF format?</a>
                    <a href="#">What is your return policy if I am not satisfied?</a>
                </div>

                <div className={styles.info}>
                    <h3>Information</h3>
                    <a href="#">Help Center</a>
                    <a href="#">Track Your Order</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>

                <div className={styles.information}>
                    <a href="#">Shipping Information</a>
                    <a href="#">Payment Methods</a>
                    <a href="#">Returns</a>
                    <a href="#">Privacy Policy</a>
                </div>

                <div className={styles.contacts}>
                    <a href="#">Contact</a>
                    <a href="#">Support Center</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">About Aura</a>
                </div>
            </div>
        </div>
    )
}