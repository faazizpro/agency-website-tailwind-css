import React from 'react';
import './Service.css'
import service1 from '../../images/service 1.png'
import service2 from '../../images/service 2.png'
import service3 from '../../images/service 3.png'
import service4 from '../../images/service 4.png'

const Service = () => {
    return (
        <div className='pb-20 mb-20' id='service-bg'>
            {/* Service Info Section Start */}
            <div className='pt-20 pb-20'>
                <h3 className='font-bold text-2xl text-center mb-2'>Services</h3>
                <h2 className='font-bold text-5xl text-center'>We Provide</h2>
                <p className='text-center font-semibold mt-4 sm:w-2/5 sm:mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum nesciunt praesentium, itaque repellendus veniam nulla! Sed saepe nisi dignissimos similique.</p>
            </div>
            {/* Service Info Section End */}

            {/* Service Lists Section Starts */}
            <div className='grid grid-cols-4 w-3/4 mx-auto drop-shadow-lg   '>
                <div className='w-60 text-center bg-white pt-7 pb-7 rounded'>
                    <img src={service1} className="w-4/12 mx-auto" alt="" />
                    <h3 className='font-bold text-3xl mt-3'>Web Design</h3>
                    <p className='mt-3 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='w-60 text-center bg-white pt-7 pb-7 rounded'>
                    <img src={service2} className="w-4/12 mx-auto" alt="" />
                    <h3 className='font-bold text-3xl mt-3'>UI/UX Design</h3>
                    <p className='mt-3 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='w-60 text-center bg-white pt-7 pb-7 rounded'>
                    <img src={service3} className="w-4/12 mx-auto" alt="" />
                    <h3 className='font-bold text-3xl mt-3'>Graphics design</h3>
                    <p className='mt-3 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='w-60 text-center bg-white pt-7 pb-7 rounded'>
                    <img src={service4} className="w-4/12 mx-auto" alt="" />
                    <h3 className='font-bold text-3xl mt-3'>SEO Marketing</h3>
                    <p className='mt-3 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            {/* Service Lists Section Ends */}
        </div>
    );
};

export default Service;