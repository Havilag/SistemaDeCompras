import { Link } from "react-router-dom";
import styles from "./navbar.module.css"

export function NavBar () {
    
    return(
        <div className={styles.container}>
            <nav className={styles["container-nav"]}>
                <ul>
                    <li><Link to="/">clothing</Link></li>
                    <li><Link to="/">Accessories</Link></li>
                    <li><Link to="/">footwear</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}