import { useEffect, useState } from "react"
import { NavBar } from "../../components/navbar/navbar"
import { ApiProduct } from "../../services/api-products"
import styles from "./home.module.css"
import { ChevronLeft, ChevronRight, CircleUserRound } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useProduct } from "../../hooks/useProducts"
import { useFilterProducts } from "../../hooks/useFilterProducts"
import { OfflinePage } from "../../components/error/offline-page"
import { Footer } from "../../components/footer/footer"


export const Home = () => {


    const navigate = useNavigate();

    const [selectCategory, setselectCategory] = useState("all");
    const { AllProducts, loading, error } = useProduct();
    const { FilterProduct, ProductPerPage, page, NextPage, PrevPage } = useFilterProducts(AllProducts, selectCategory);

    const category = ["all", "clothing", "Accessories", "footwear"]



    if (loading) {
        return <div className={styles.loading}>Cargando productos...</div>;
    }

    if (error) {
        return <OfflinePage />
    }



    return (
        <div className={styles.container}>
            <NavBar ChangeCategory={setselectCategory} />

            <div className={styles["products-grid"]}>
                {

                    ProductPerPage.map((product) => (
                        <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} className={styles["Date-products"]}>
                            <img src={product.image} />
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                        </div>

                    ))
                }
            </div>

            <div className={styles["Container-Nav"]}>
                <div onClick={PrevPage} className={styles.NavLeft}>
                    <ChevronLeft size={30} />
                </div>
                <p>{page}</p>
                <div onClick={NextPage} className={styles.NavRight}>
                    <ChevronRight size={30} />
                </div>
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>

        </div>
    )
}