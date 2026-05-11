import { WifiOff } from "lucide-react"
import styles from "./offline-page.module.css"

export const OfflinePage = ({message}) =>{

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>AURA</h1>
                <div className={styles.error}>
                    <WifiOff size={40}/>
                    <h2>We were unable to load the products. Please check your connection and try again.</h2>
                </div>
            </div>
        </div>
    )

}