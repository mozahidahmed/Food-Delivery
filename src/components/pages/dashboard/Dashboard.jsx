import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
      <div className="py-12">
        <div className="flex justify-center gap-12 py-4">
          <Link to="profile">
            <h1 className="font-bold border-2 rounded-full p-2 px-6">
              profile
            </h1>
          </Link>
          <Link to="addreview">
            <h1 className="font-bold border-2 rounded-full p-2 px-6">
              Reviews
            </h1>
          </Link>
          <Link to="myorder">
            <h1 className="font-bold border-2 rounded-full p-2 px-6">Orders</h1>
          </Link>
        </div>
        <hr />
        <Outlet></Outlet>
      </div>
    );
};

export default Dashboard;