import { CartProduct } from "../context/cartContext";
import { ApiProduct } from "../services/api-products";
import { useMemo, useContext, useEffect, useState } from "react";


export const UseFetch = (selectedCategory) =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const itemsPerPage = 9;

    const categoryGroups = {
            clothing: ["tops", "womens-dresses", "mens-shirts"],
            accessories: ["womens-bags", "sunglasses", "womens-jewellery", "mens-watches", "womens-watches"],
            footwear: ["womens-shoes", "mens-shoes"]
        };


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


    useEffect(() => {
        setPage(1);
    }, [selectedCategory]);



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

    const FilterProduct = useMemo(() => {
        return selectedCategory ===  "all"
            ? products
            : products.filter((SelectedProduct) => {
                const group = categoryGroups[selectedCategory];
                return group ? group.includes(SelectedProduct.category) : false  ;
            });
    }, [products, selectedCategory]);

    const paginatedProducts = FilterProduct.slice(FirstIndex, LastIndex);


    return {
        products: paginatedProducts,
        allProducts: FilterProduct, 
        loading,
        NextPage,
        PrevPage,
        page,
    };
};