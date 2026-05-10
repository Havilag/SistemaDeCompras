import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const useReditect = (emptycart) =>{

    const navigate = useNavigate();
    
    const [time, setTime] = useState(5);

    useEffect(() => {
        if(emptycart === 0){
            const timer = setInterval(() => {
                setTime((prev) =>{
                    if(prev < 1){
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000)

            const timeout = setTimeout(() => {
                navigate("/");
            },5000);

            return () => {
                clearInterval(timer);
                clearTimeout(timeout);
            };
        }
    },[emptycart,navigate]);

    return time;

}