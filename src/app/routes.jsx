import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Page
const GuestHome =  lazy(() => import("@/pages/guest"))
const ProductList =  lazy(() => import("@/pages/products/components/product-list"))
const createRouter = (queryClient) => createBrowserRouter([
    {
        path: "/",
        element: <GuestHome/>
    },
    {
        path: "/products",
        element: <ProductList/>
    },
])

export default createRouter