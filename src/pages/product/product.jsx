import { useParams } from "react-router-dom";
import { UseFetch } from "../../hooks/useFetch";
import styles from "./product.module.css";
import { NavBar } from "../../navbar/navbar";
import { CircleUserRound, SquareMinus, SquarePlus } from "lucide-react";

export const ProductDate = () => {

    const { id } = useParams();
    const { products, loading } = UseFetch();

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    const product = products.find((item) => item.id === Number(id));

    return (
        <div className={styles.container}>

            <div className={styles["full-header"]}>

                <div className={styles["container-header"]}>

                    <div className={styles.title}>
                        <h1>Aura</h1>
                    </div>

                    <div className={styles["Button-Login"]}>

                        <button className={styles.Login}>
                            Login
                            <CircleUserRound className={styles.user} />
                        </button>
                    </div>
                </div>

                <div className={styles.NavBar}>
                    <NavBar />
                </div>
            </div>

            <div className={styles["container-products"]}>
                <div className={styles.ProductImage}>
                    <img src={product.image} />
                </div>

                <div className={styles.description} >
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p><span>${product.price}</span></p>
                    <div className={styles["button-buy"]}>
                        <SquareMinus />
                        <p>1</p>
                        <SquarePlus />
                    </div>
                    <button className={styles.buy}>Buy</button>
                    
                </div>
            </div>
        </div>
    )
}