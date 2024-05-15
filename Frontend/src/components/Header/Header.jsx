import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../Image/Logo.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-14 h-14 w-35"
                            alt="Logo"
                        />
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="block text-gray-800 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-3 py-2 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <div className="lg:flex lg:space-x-8 lg:items-center lg:justify-center">
                            <NavLink
                                to="/"
                                activeClassName="text-green-300"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-300 lg:p-0"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeClassName="text-green-300"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-300 lg:p-0"
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                activeClassName="text-green-300"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-300 lg:p-0"
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to="/cart"
                                activeClassName="text-green-300"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-300 lg:p-0"
                            >
                                Cart
                            </NavLink>
                        </div>
                        <div className="lg:ml-auto ">
                            <Link
                                to="#"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-green-300 hover:bg-green-300 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
