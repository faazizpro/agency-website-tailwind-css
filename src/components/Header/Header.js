import React from 'react';
import './Header.css'
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <div className='sticky top top-0 z-50'>
            <nav className='flex justify-around items-center border-b-2 bg-white'>
                <div className="logo flex items-center">
                    <img src={logo} alt="" />
                    <h2 className='text-4xl font-bold'>FaazizPRO</h2>
                </div>
                <div className="menu-list flex list-none text-2xl font-bold">
                    <li className='mr-10'><a href="/home">Home
                    </a></li>

                    <li className='mr-10'><a href="/services">Services
                    </a></li>

                    <li className='mr-10'><a href="/about">About Us
                    </a></li>

                    <li className='mr-10'><a href="/portfolio">Portfolio
                    </a></li>
                </div>
                <div className="contact-btn">
                    <button className="bg-sky-500 py-3 px-10 rounded text-white font-semibold text-lg">Contact</button>
                </div>
            </nav>

        </div>
    );
};

export default Header;