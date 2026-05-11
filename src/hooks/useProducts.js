import { useEffect, useState } from "react";
import { ApiProduct } from "../services/api-products";


export const useProduct = () =>{

    const [loading, setLoading] = useState(true);
    const [AllProducts, setProducts] = useState([]);
    const [error, setError] = useState(null);

    
   
    const LoadData = async () => {
        try {
            setLoading(true);
            setError(null);

            if(!navigator.onLine){
                throw new Error("Offline");
            }

            const response = await ApiProduct();
            setProducts(response);
            } catch (error) {
                setError("The products could not be loaded. Please try again.")
                alert(error);
            }finally{
                setLoading(false);
            }
            };
            useEffect(() => {
                LoadData();
            }, []);

    return{
        AllProducts,
        loading,
        error
    };

}