import React from 'react';
import './Header.css'
import logo from '../../images/logo.png';
import heroImg from '../../images/hero-img.png'

const Header = () => {
    return (
        <div>
            <nav className='flex justify-around items-center border-b-2'>
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
            {/* Hero Section Design Starts */}
            <div className="hero-section flex">
                <div id="hero-info">
                    <h1 className='text-6xl font-bold'>
                    We are the best agency <br /> in the world
                    </h1>
                </div>

                <div id="hero-img">
                    <img src={heroImg} className='w-2/4 h-auto' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;