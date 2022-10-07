import React from 'react';
import './FAQ.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'


const FAQ = () => {
    return (
        <div className='faq-bg pb-10 mb-10'>
            <div className=' pt-10'>
                <div className='text-center mb-10'>
                    <h3 className='text-2xl font-bold mb-5'>FAQ’S</h3>
                    <h2 className='text-5xl font-bold'>Find the answers you need</h2>
                </div>
                {/* FAQ */}
                <div className='w-6/12 mx-auto bg-white p-3 shadow-md mb-5'>
                    <div className=''>
                        <div className='flex items-center gap-40 text-2xl font-bold'>
                            <h3 className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> 
                            <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                        <p className='w-4/6 mt-2 font-semibold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae.
                        </p>
                    </div>
                </div>
                <div className='w-6/12 mx-auto bg-white p-3 shadow-md mb-5'>
                    <div className=''>
                        <div className='flex items-center gap-40 text-2xl font-bold'>
                            <h3 className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> 
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                </div>
                <div className='w-6/12 mx-auto bg-white p-3 shadow-md mb-5'>
                    <div className=''>
                        <div className='flex items-center gap-40 text-2xl font-bold'>
                            <h3 className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> 
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                </div>
                <div className='w-6/12 mx-auto bg-white p-3 shadow-md mb-5'>
                    <div className=''>
                        <div className='flex items-center gap-40 text-2xl font-bold'>
                            <h3 className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> 
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                </div>
                <div className='w-6/12 mx-auto bg-white p-3 shadow-md mb-5'>
                    <div className=''>
                        <div className='flex items-center gap-40 text-2xl font-bold'>
                            <h3 className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> 
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>  
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;