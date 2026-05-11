
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist((set) => ({

    cart: [], 

    clearCart: () => set({ cart: [] }),
    

    RemoveProduct: (id) =>set((state) => {

        const productExiste = state.cart.find((cartProductID) => cartProductID.id === id);

        if(productExiste.quantity > 1){
            return{
                cart: state.cart.map((productID) => productID.id == id ?
                {...productID, quantity: productID.quantity - 1}
                : productID
            ),
            }
        
        }
        else{
            return{
                cart: state.cart.filter((productID) => productID.id !== id),
            };
        }
        
    }),

    AddQuantity: (id) => set((state) => ({
        cart: state.cart.map((item) => item.id === id ? 
        { ...item, quantity: item.quantity + 1 } 
        : item
        ),
    })),


    AddToCart: (product) =>         
        set((state) => { 

            const productExiste = state.cart.find((cartProductID) => cartProductID.id === product.id);

            if(productExiste){
                return {
                    cart: state.cart.map((ProductData) => ProductData.id === product.id ?
                    {...ProductData,quantity: ProductData.quantity + product.quantity}
                    : ProductData ),
                };
            }
            else{
                return { 
                    cart: [...state.cart, product] 
                };
            }
            
    }),
    }),
    { name: "cart-products"} 
  )
);