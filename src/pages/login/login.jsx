import { useRef, useEffect, useState } from "react"
import { UseAuthStore } from "../../store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css"

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = UseAuthStore(data => data.login);

    const inputRef = useRef(null);
    const passRef = useRef(null);
    
    const navigate = useNavigate();


    useEffect(() => {
        inputRef.current.focus();
        passRef.current.focus();
    }, []);



    const LoginSend = async (LoginData) => {
        LoginData.preventDefault();

        const LoginSuccess = await login(username, password);

        if(!username.trim() || !password.trim()){
            alert("Complete all fields");
            return
        }

        if (LoginSuccess) {
            navigate("/");
        } 
    };


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Aura</h1>
            </div>

            <form className={styles["Form-Login"]} onSubmit={LoginSend}>
                <p>Username:</p>
                <input ref={inputRef} type="text" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <p>Password:</p>
                <input ref={passRef} type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>

            </form>


        </div>
    )
}