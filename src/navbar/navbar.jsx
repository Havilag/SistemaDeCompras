import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css"
import { CircleUserRound, ShoppingBag } from "lucide-react";
import { useContext, useState } from "react";
import { FloatingCart } from "../floatingCart/floatingCart";
import { UseFetch } from "../hooks/useFetch";
import { CartProduct } from "../context/cartContext";

export function NavBar({ ChangeCategory }) {

  const [Open, setOpen] = useState(false);
  const { countcart } = UseFetch();
  const { product } = useContext(CartProduct);
  const OpenCart = () => setOpen(!Open);
  const navigate = useNavigate();



  const ShowCart = () => {
    if (!Open) {
      return null;
    }
    return (
      <>
        <div className={styles.ShowCart} onClick={() => setOpen(false)} />
        <FloatingCart CloseCart={() => setOpen(false)} />
      </>
    )
  }



  const Listfilter = (category) => {
    if (!ChangeCategory) {
      navigate("/");
    } else {
      ChangeCategory(category);
    }

  }



  const TotalProducts = product.length;

  return (
    <div className={styles["full-header"]}>
      <div className={styles["container-header"]}>
        <div className={styles.title}>
          <h1>Aura</h1>
        </div>

        <div className={styles["Button-Login"]}>

          <div onClick={OpenCart} className={styles.cartContainer}>
            <ShoppingBag className={styles.user} />
            {
              TotalProducts > 0 ? (
                <span className={styles.badge}>{TotalProducts}</span>
              ) : (null)
            }
          </div>

          <button className={styles.Login}>
            Login
            <CircleUserRound className={styles.user} />
          </button>

        </div>
      </div>

      <nav className={styles["container-nav"]}>
        <ul>
          <li onClick={() => Listfilter("all")}>All</li>
          <li onClick={() => Listfilter("clothing")}>Clothing</li>
          <li onClick={() => Listfilter("accessories")}>Accessories</li>
          <li onClick={() => Listfilter("footwear")}>footwear</li>
        </ul>
      </nav>
      {
        ShowCart()
      }
    </div>
  );
};