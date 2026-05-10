import { createContext, useState } from "react"
import { useCartStore } from "../store/useCartStore";


export const CartProduct = createContext();

export const CartContext = ({ children }) => {

    const product = useCartStore((productCart) => productCart.cart);

    const addToCart = (newProduct) => {
        useCartStore.setState((prevcart) => {
            const exists = prevcart.cart.find((ProductIndex) => ProductIndex.id === newProduct.id);

            if (exists) {
                return {
                    cart: prevcart.cart.map((ItemProduct) => ItemProduct.id === newProduct.id ?
                        { ...ItemProduct, quantity: ItemProduct.quantity + newProduct.quantity } : ItemProduct
                    )};
            }

            return {
                cart: [...prevcart.cart, newProduct]
            };
        });
    };

    return (
        <CartProduct.Provider value={{ product, addToCart }}>
            {children}
        </CartProduct.Provider>
    );
}