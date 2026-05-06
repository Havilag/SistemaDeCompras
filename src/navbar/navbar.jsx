import { Link } from "react-router-dom";
import styles from "./navbar.module.css"
import { CircleUserRound, ShoppingBag } from "lucide-react";
import { useContext, useState } from "react";
import { FloatingCart } from "../floatingCart/floatingCart";
import { UseFetch } from "../hooks/useFetch";
import { CartProduct } from "../context/cartContext";

export function NavBar() {

  const [Open, setOpen] = useState(false);
  const { countcart } = UseFetch();
  const { product } = useContext(CartProduct);
  const OpenCart = () => setOpen(!Open);

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


  const TotalProducts = product.length;

  return (
    <div className={styles["full-header"]}>
      <div className={styles["container-header"]}>
        <div className={styles.title}>
          <Link to="/">
            <h1>Aura</h1>
          </Link>
        </div>

        <div className={styles["Button-Login"]}>

          <div onClick={OpenCart} className={styles.cartContainer}>
            <ShoppingBag className={styles.user} />
            {
              TotalProducts > 0 ?(
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
          <li><Link to="/">clothing</Link></li>
          <li><Link to="/">Accessories</Link></li>
          <li><Link to="/">footwear</Link></li>
        </ul>
      </nav>
      {
        ShowCart()
      }
    </div>
  );
};