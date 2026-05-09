import { useState } from "react"
import { UseAuthStore } from "../../store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css"

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = UseAuthStore(data => data.login);

    const navigate = useNavigate();

    const LoginSend = async (LoginData) => {
        LoginData.preventDefault();

        const LoginSuccess = await login(username, password);

        if (LoginSuccess) {
            navigate("/home");
        } 
    };


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Aura</h1>
            </div>

            <form className={styles["Form-Login"]} onSubmit={LoginSend}>
                <p>Username:</p>
                <input type="text" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <p>Password:</p>
                <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>

            </form>


        </div>
    )
}