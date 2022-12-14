import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Main from "../Components/Pages/Layout/Main/Main";
import Login from "../Components/Pages/Login/Login";
import MyOrders from "../Components/Pages/Shared/DashBoard/BuyerOrders/MyOrders";
import DashBoardLayout from "../Components/Pages/Shared/DashBoard/DashBoard/DashBoardLayout";
import AddaProduct from "../Components/Pages/Shared/DashBoard/Seller/AddaProduct";
import MyAllProducts from "../Components/Pages/Shared/DashBoard/Seller/MyAllProducts";
import MyBuyers from "../Components/Pages/Shared/DashBoard/Seller/MyBuyers";
import AllUsers from "../Components/Pages/Shared/DashBoard/Admin/AllUsers";
import AllBuyers from "../Components/Pages/Shared/DashBoard/Admin/AllBuyers";
import ReportedItems from "../Components/Pages/Shared/DashBoard/Admin/ReportedItems";
import AllPhones from "../Components/Pages/Shared/PhoneCtg/AllPhones";
import Signup from "../Components/Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Blogs from "../Components/Pages/Shared/Blogs/Blogs";
import Error404 from "../Components/Pages/Error404/Error404";
import About from "../Components/Pages/Shared/About/About";
import AdminRoute from "./AdminRoute/AdminRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>

            },
            {
                path: '/allPhones/:id',
                element: <PrivateRoutes><AllPhones></AllPhones></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ],
    },
    {
        path: '*',
        element: <Error404></Error404>

    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/AddedProduct',
                element: <AddaProduct></AddaProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyAllProducts></MyAllProducts>
            },
            {
                path: '/dashboard/myBuyers',
                element: <AdminRoute><MyBuyers></MyBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/ReportedItems',
                element: <ReportedItems></ReportedItems>
            }
        ]
    }

]);
export default router;