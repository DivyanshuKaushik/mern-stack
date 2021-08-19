import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

    return (
        <>
            <nav className="sticky top-0 grid grid-cols-2 bg-gray-100 w-full shadow-md">
                <div className="m-3 text-2xl pl-8">
                    <Link to="/"><h1 className="text-gray-800">Mern Stack</h1></Link>
                </div>
                <div className="flex justify-end items-center sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <ul className="hidden sm:flex flex-wrap justify-center items-center">
                    <Link className="active:text-gray-500 text-red-400 p-4 transform hover:scale-100 transition-all" to="/">Home</Link>
                    <Link className="active:text-gray-500 text-red-400 p-4" to="/signup">Sign Up</Link>
                    <Link className="active:text-gray-500 text-red-400 p-4" to="/signin">Sign In</Link>
                    <Link className="active:text-gray-500 text-red-400 p-4" to="/about">About</Link>
                </ul>
            </nav>
        </>
    )
}

export default Header
