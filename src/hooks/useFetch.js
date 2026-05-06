import { CartProduct } from "../context/cartContext";
import { ApiProduct } from "../services/api-products";
import { useContext, useEffect, useState } from "react";


export const UseFetch = () =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;

    const LastIndex = page * itemsPerPage;
    const FirstIndex = LastIndex - itemsPerPage;

    
        useEffect(() => {
    
            const LoadData = async () => {
                try {
                    const response = await ApiProduct();
                    setProducts(response);
                } catch (error) {
                    alert(error);
                }finally{
                    setLoading(false);
                }
            }
            LoadData();
        }, []);


    const PageProduct = products.slice(FirstIndex,LastIndex);

    const NextPage = () =>{
        if(LastIndex < products.length){
            setPage(prev => prev + 1);
        }
    }

    const PrevPage = () => {
        if(FirstIndex > 0){
            setPage(prev => prev - 1);
        } 
    }

    return {
        products: PageProduct, 
        loading,
        NextPage,
        PrevPage,
        page,
    };
};