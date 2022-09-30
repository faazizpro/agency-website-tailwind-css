import React from 'react';
import './Hero.css'
import heroImg from '../../images/hero-img.png'
const Hero = () => {
    return (
        <div className=''>
            {/* Hero Section Design Starts */}
                <div className="flex items-center justify-between container mx-auto">
                    <div id="hero-info" className=''>
                        <h1 className='text-7xl font-bold'>
                        Your Next Big Idea Starts Here.
                        </h1>
                        <p className='w-3/4 mt-5 text-lg font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente fuga illo veniam? Minus, voluptatum quas, porro, exercitationem sit fugit a autem incidunt eaque molestiae facere veritatis fugiat. Rem, deserunt iure.</p>


                        <div className='mt-5'>
                            <button className="bg-sky-500 py-3 px-10 rounded text-white font-semibold text-lg">Hire Us</button>
                            <button className="bg-sky-500 py-3 px-10 rounded text-white font-semibold text-lg ml-10">Read More</button>
                        </div>
                    </div>
        
                    <div id="hero-img" className=' w-5/5'>
                        <img src={heroImg} className='' alt="" />
                    </div>
                </div>
            {/* Hero Section Design Ends */}
            
        </div>
    );
};

export default Hero;