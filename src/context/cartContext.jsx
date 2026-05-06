import { createContext, useState } from "react"


export const CartProduct = createContext();

export const CartContext = ({ children }) => {

    const [product, setProduct] = useState([]);

    const addToCart = (newProduct) => {
        setProduct((prevcart) => {
            const exists = prevcart.find((ProductIndex) => ProductIndex.id === newProduct.id);

            if (exists) {
                return (
                    prevcart.map((ItemProduct) => ItemProduct.id === newProduct.id ?
                        { ...ItemProduct, quantity: ItemProduct.quantity + newProduct.quantity } : ItemProduct
                    ));
            }

            return [...prevcart, newProduct];
        });
    };

    return (
        <CartProduct.Provider value={{ product, addToCart }}>
            {children}
        </CartProduct.Provider>
    );
}