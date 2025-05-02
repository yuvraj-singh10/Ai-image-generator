import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg"


export const Navbar = () => {
    const location = useLocation();
  return (
    <nav className=" flex items-center justify-between px-5 text-black bg-teal-500  w-full ">
      <div>
        <img src={logo} alt="HindTech Logo Image" className="h-20 px-4" />
      </div>
      <div >
        {
            location.pathname === "/" ? (<Link to={"/post"}>
            <button className="bg-red-900 text-white  py-1 px-4 mx-4 rounded-md  cursor-pointer text-bold">+ Create New Post</button>
            </Link>
            ) : (
            <Link to={"/"}>
            <button className="bg-blue-900 text-white  py-1 px-4 mx-4 rounded-md  cursor-pointer text-bold">Posts</button>
            </Link>
            )
        }
      </div>
    </nav>
  );
}

export default Navbar;