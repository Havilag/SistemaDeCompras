import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { ProductData } from "../pages/product/product";
import { Checkout } from "../pages/checkout/checkout";



export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/product/:id",
        element: <ProductData />
    },
    {
        path: "/checkout",
        element: <Checkout />
    }
]);