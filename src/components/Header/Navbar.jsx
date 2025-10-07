import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    const links = <>
    <Link to="/"><a className='m-2'>Home</a></Link>
    <Link><a className='m-2'>Listed Books</a></Link>
    <Link to="/readList"><a className='m-2'>Read List</a></Link>
    <Link to="/about"><a className='m-2'>About</a></Link>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/"><a className="btn btn-ghost text-xl">Boi Poka</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {links}
            </div>
            <div className="navbar-end">
                <button className='btn bg-blue-500 text-white mr-10 rounded-full px-8 py-3'>Sine In</button>
                <button className='btn bg-red-500 text-white rounded-full px-8 py-3'>Sine Up</button>
            </div>
        </div>
    );
};

export default Navbar;