import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { ProductData } from "../pages/product/product";
import { Checkout } from "../pages/checkout/checkout";
import { Login } from "../pages/login/login";
import { ProtectedRouter } from "./router-protection";




export const Router = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    },

    {
        path: "/product/:id",
        element: <ProductData />
    },

    {
        path: "/login",
        element: <Login />
    },

    {
        element: <ProtectedRouter />,
        children: [

            {
                path: "/checkout",
                element: <Checkout />
            }

        ]
    }
]);