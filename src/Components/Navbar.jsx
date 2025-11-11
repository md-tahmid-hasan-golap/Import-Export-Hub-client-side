import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import logo from "../../src/assets/photo-1726828537956-61ae115d7d7a.avif";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handelLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  const links = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/allProducts"
          className={({ isActive }) =>
            isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
          }
        >
          All Products
        </NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li className="font-bold">
            <NavLink
              to="/myExports"
              className={({ isActive }) =>
                isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
              }
            >
              My Products
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to="/myImports"
              className={({ isActive }) =>
                isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
              }
            >
              My Imports
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to="/addExport"
              className={({ isActive }) =>
                isActive ? "btn bg-blue-600 text-white mr-2" : "btn mr-2"
              }
            >
              {" "}
              Add Products
            </NavLink>
          </li>
        </>
      )}
      <input
        onChange={(e) => handleTheme(e.target.checked)}
        type="checkbox"
        defaultChecked={localStorage.getItem("theme") === "dark"}
        className="toggle mt-2 ml-20"
      />
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 rounded-lg"
          />
          <h2 className="text-lg sm:text-xl md:text-xl hidden md:flex lg:text-xl font-extrabold text-center sm:text-left bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Import Export Hub
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="navbar-end gap-3">
            <img
              className="border-2 border-green-600 w-12 h-12 rounded-full"
              src={user.photoURL}
              title={user.displayName}
              alt=""
            />

            <button
              onClick={handelLogout}
              className="btn bg-red-600 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-3">
            {" "}
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
