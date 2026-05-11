import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css"
import { CircleUserRound, ShoppingBag } from "lucide-react";
import { useCallback, useContext, useState } from "react";
import { FloatingCart } from "../floatingCart/floatingCart";
import { CartProduct } from "../../context/cartContext";
import { UseAuthStore } from "../../store/useAuthStore";

export function NavBar({ ChangeCategory }) {

  const [Open, setOpen] = useState(false);

  const { product } = useContext(CartProduct);
  const navigate = useNavigate();

  const validation = UseAuthStore((validate) => validate.authenticated);
  const UserName = UseAuthStore((UserData) => UserData.username);
  const logout = UseAuthStore((log) => log.logout);


  const OpenCart = useCallback(() => {
    setOpen(prev => !prev);
  }, []);


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


  const EndSession = () => {
    logout();
    navigate("/");
  }


  const Listfilter = useCallback((category) => {
    if (!ChangeCategory) {
      navigate("/");
    } else {
      ChangeCategory(category);
    }

  }, [ChangeCategory, navigate]);



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

          {
            validation ? (
              <div className={styles.Logout}>
                <div className={styles["user-info"]}>
                  {UserName.username}
                  <button onClick={EndSession} className={styles.session}>
                    Logout
                  </button>
                </div>
                <CircleUserRound className={styles.user} />
              </div>
            ) : (
              <Link to="/login" className={styles.Login}>
                Login
                <CircleUserRound className={styles.user} />
              </Link>
            )

          }

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