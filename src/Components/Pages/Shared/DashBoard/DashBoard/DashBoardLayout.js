import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../Layout/Hooks/useAdmin';
import Navbar from '../../Navbar/Navbar';

const DashBoardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    // const [isSeller] = SellerPanel()

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {/* BUYER */}

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {/* SELLER */}
                        <li><Link to='/dashboard/AddedProduct'> Add a Product</Link></li>
                        <li><Link to='/dashboard/myProducts'> My Products</Link></li>

                        {/* admin */}
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/myBuyers'> My buyers</Link></li>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;