import React from 'react';
import aboutImg from '../../images/about image.png'
const About = () => {
    return (
        <div className='flex gap-20 items-center justify-center mb-20'>
            <div>
                <img src={aboutImg} alt="" />
            </div>
            <div className=''>
                <h3 className='text-2xl font-bold mb-5'>About Us</h3>
                <h2 className='text-5xl font-bold'>We are a creative agency</h2>
                <p className='w-3/4 mt-5 font-medium'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis animi <br /> tempora quo vero cumque iusto  autem magni, error nulla praesentium? <br /> Eveniet possimus voluptas necessitatibus! Cupiditate consequatur eaque nobis facilis ipsum 
                </p>
                <button className="bg-sky-500 py-3 px-10 rounded text-white font-semibold text-lg mt-5">More About Us</button>
            </div>
        </div>
        
    );
};

export default About;