import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">All Post</Link>
      </li>
      <li>
        <Link to="/allorders">All Orders</Link>
      </li>
      <li>
        <Link to="/allreviews">All Reviews</Link>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link
              as="a"
              to="/"
              className="mr-4 cursor-pointer py-1.5 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-pink-500 text-xl font-extrabold"
            >
              Pet Adoption Platform
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">{menuItems}</ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Main;
