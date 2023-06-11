import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/img/logo.png"



function Navbar() {

  return (
    <nav className="flex justify-between items-center h-20 bg-[#85d099] text-black relative" >
      <Link className="tituloLogo" to="/">
        <img src={logo} width={"50px"} />
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
        </svg>


      </div>
      <div className="px-8 hidden md:block ">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/books" className="p-4">
          Books
        </Link>

      </div>

    </nav>

  )

}
export default Navbar;
