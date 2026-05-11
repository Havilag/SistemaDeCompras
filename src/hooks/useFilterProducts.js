import { useState, useMemo, useEffect } from "react";

export const useFilterProducts = (products, selectCategory) =>{

    const [page, setPage] = useState(1);

    const categoryGroups = {
            clothing: ["tops", "womens-dresses", "mens-shirts"],
            accessories: ["womens-bags", "sunglasses", "womens-jewellery", "mens-watches", "womens-watches"],
            footwear: ["womens-shoes", "mens-shoes"]
    };


    const FilterProduct = useMemo(() => {
        return selectCategory ===  "all"
            ? products
            : products.filter((SelectedProduct) => {
                const group = categoryGroups[selectCategory];
                return group ? group.includes(SelectedProduct.category) : false  ;
            });
    }, [products, selectCategory]);

    const EndIndex = page * 9;
    const IndexStart = EndIndex - 9;

    const ProductPerPage = FilterProduct.slice(IndexStart, EndIndex);

    useEffect(() => {
        setPage(1);
    }, [selectCategory]);


    const NextPage = () =>{
        if(EndIndex < FilterProduct.length){
            setPage(prev => prev + 1);
        }
    }

    const PrevPage = () => {
        if(IndexStart > 0){
            setPage(prev => prev - 1);
        } 
    }

    return{
        ProductPerPage,
        NextPage,
        PrevPage,
        products,
        page,
        FilterProduct
    }

}