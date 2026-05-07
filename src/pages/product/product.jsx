import { useParams } from "react-router-dom";
import { UseFetch } from "../../hooks/useFetch";
import styles from "./product.module.css";
import { NavBar } from "../../navbar/navbar";
import { CircleUserRound, SquareMinus, SquarePlus } from "lucide-react";
import { useCount } from "../../hooks/useCount";
import { useContext } from "react";
import { CartProduct } from "../../context/cartContext";

export const ProductData = () => {

    const { id } = useParams();
    const {allProducts, products, loading } = UseFetch("all");
    const {count, increase, decrease, resetCount} = useCount();
    const { addToCart } = useContext(CartProduct);


    if (loading) {
        return <div>Cargando productos...</div>;
    }

    const product = allProducts.find((item) => item.id === Number(id));
    

    const SendProduct = () =>{
        if(!product){
            return;
        }
        const ProductData = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: count
        }
        
        addToCart(ProductData);
        resetCount();
    }


    

    return (
        <div className={styles.container}>

            <NavBar />

            <div className={styles["container-products"]}>

                <div className={styles.ProductImage}>
                    <img src={product.image} />
                </div>

                <div className={styles.description} >
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p><span>${product.price}</span></p>

                    <div className={styles["button-buy"]}>
                        <SquareMinus onClick={decrease}/>
                        <p>{count}</p>
                        <SquarePlus onClick={increase}/>
                    </div>

                    <button onClick={() => SendProduct()} className={styles.buy}>Add</button>
                </div>

            </div>
        </div>
    )
}