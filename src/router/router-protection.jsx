import { Navigate, Outlet } from "react-router-dom";
import { UseAuthStore } from "../store/useAuthStore";

export const ProtectedRouter = () =>{
    
    const authenticated = UseAuthStore(
        (user) => user.authenticated
    );

    if(!authenticated){
        return <Navigate to={"/login"} />;
    }

    return <Outlet />;
}