import React from 'react';
import { Link, Outlet } from "react-router-dom";
import useAdmin from '../../../hooks/useAdmin';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
      <div className="">
        <div className="grid lg:grid-cols-12">
          <div className="col-start-1 col-end-3 bg-red-200 py-6">
            <div className="">
              <Link to="profile">
                <h1 className="font-bold  p-2 px-6 bg-red-300 rounded-full mt-2">
                  profile
                </h1>
              </Link>

              {!admin && (
                <>
                  <Link to="myorder">
                    <h1 className="font-bold  p-2 px-6 bg-red-300 rounded-full mt-2">
                      Orders
                    </h1>
                  </Link>

                  <Link to="addreview">
                    <h1 className="font-bold  p-2 px-6 bg-red-300 rounded-full mt-2">
                      Reviews
                    </h1>
                  </Link>
                </>
              )}
              {admin && (
                <>
                  <Link to="managefoods">
                    <h1 className="font-bold  p-2 px-6 bg-red-300 rounded-full mt-2">
                      Manage Foods
                    </h1>
                  </Link>
                  <Link to="addfood">
                    <h1 className="font-bold  p-2 px-6 bg-red-300 rounded-full mt-2">
                      Add Foods
                    </h1>
                  </Link>
                  <Link to="alluser">
                    <h1 className="font-bold  p-2 px-6 bg-red-300 rounded-full mt-2">
                      All User
                    </h1>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="col-start-4 col-end-12">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;