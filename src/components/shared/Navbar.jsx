import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";
import Dashboard from './../pages/dashboard/Dashboard';



const Navbar = () => {
   const [user] = useAuthState(auth);

   
   const logout = () => {
     signOut(auth);
   };
    
  return (
    <div className="">
      <div className="relative z-20 border-b bg-white shadow-xl">
        <div className="px-6 lg:py-2">
          <div className="flex items-center justify-between">
            <div className="relative z-20">
              <h1 className="text-2xl font-bold py-2 text-red-500">Pandami</h1>
            </div>

            <div className="flex items-center justify-end border-l lg:border-l-0">
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer"
                hidden
              />
              <label
                for="hamburger"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
              </label>

              <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                    <Link to="home">
                      <li>
                        <div className="flex items-center">
                          <span className="relative px-2 group-hover:text-cyan-800 text-2xl">
                            Home
                          </span>
                        </div>
                      </li>
                    </Link>
                    <li className="">
                      <Link to="blogs">
                        <div className="flex items-center">
                          <span className="relative   group-hover:text-cyan-800 text-2xl">
                           Blogs
                          </span>
                        </div>
                      </Link>
                    </li>

                    {user ? (
                      <>
                        <li className="">
                          <Link to="cart">
                            <div className="flex items-center">
                              <span className="relative mt-1  group-hover:text-cyan-800 text-red-500 text-2xl">
                                <HiOutlineShoppingBag />
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="dashboard">
                            <div className="flex items-center">
                              <span className="relative group-hover:text-cyan-800 text-2xl ">
                                <RxAvatar />
                              </span>
                              <span className="relative px-2 group-hover:text-cyan-800 text-2xl ">
                            Dashboard
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="relative px-2   text-red-500 text-2xl">
                              <Link onClick={logout}> Logout</Link>
                            </span>
                          </div>
                        </li>
                      </>
                    ) : (
                      <li>
                        <div className="flex items-center">
                          <span className="relative px-2   text-red-500 text-2xl">
                            <Link to="login"> Login</Link>
                          </span>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;