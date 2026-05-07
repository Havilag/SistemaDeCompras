import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { ProductData } from "../pages/product/product";



export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/product/:id",
        element: <ProductData />
    }
]);