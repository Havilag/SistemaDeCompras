import { useEffect, useState } from "react"
import { NavBar } from "../navbar/navbar"
import { ApiProduct } from "../services/api-products"
import styles from "./home.module.css"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { UseFetch } from "../hooks/useFetch"


export const Home = () => {

    const {products, loading, page, NextPage, PrevPage} = UseFetch();

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles["container-header"]}>
                <h1>Aura</h1>
            </div>

            <div className={styles.NavBar}>
                <NavBar />
            </div>

            <div className={styles["products-grid"]}>
                {
                    products.map((product) => (
                        <div key={product.id} className={styles["Date-products"]}>
                            <img src={product.image} />
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                        </div>

                    ))
                }
            </div>

            <div className={styles["Container-Nav"]}>
                <div onClick={PrevPage} className={styles.NavLeft}>
                    <ChevronLeft size={30}/>
                </div>
                <p>{page}</p>
                <div onClick={NextPage} className={styles.NavRight}>
                    <ChevronRight size={30}/>
                </div>
            </div>

        </div>
    )
}