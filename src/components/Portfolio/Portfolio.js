import React from 'react';
import './Portfolio.css'
import portfolio1 from '../../images/site 1.png'
import portfolio2 from '../../images/site 2.png'
import portfolio3 from '../../images/site 3.png'
import { ChevronRightIcon } from '@heroicons/react/24/solid'



const Portfolio = () => {
    return (
        <div className='pt-20 pb-20' id='service-bg'>
            <div className='text-center mb-10'>
                <h3 className='text-2xl font-bold mb-5'>Portfolio</h3>
                <h2 className='text-5xl font-bold'>Our Recent Works</h2>
                <p className='mt-5 font-medium text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis animi <br /> tempora quo vero cumque iusto  autem magni, error nulla praesentium? <br /> Eveniet possimus voluptas necessitatibus!
                </p>
            </div>

            <div className='flex justify-center gap-20'>
                <div className='w-1/5 border-2 border-sky-400 rounded-lg'>
                    <img className='rounded-t-md' src={portfolio1} alt="" />
                    <div className='p-3'>
                        <h2 className='text-4xl font-bold mt-2 mb-2'>Hospital Website</h2>
                        <p className='font-medium text-gray-500 mb-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam.
                        </p>
                        <button className='text-xl font-bold border-b-2 border-sky-500 pb-1 '>Read More        
                        <ChevronRightIcon className="h-6 w-6 inline text-blue-500"/>
                        </button>
                    </div>
                </div>
                <div className='w-1/5 border-2 border-sky-400 rounded-lg'>
                    <img className='rounded-t-md' src={portfolio1} alt="" />
                    <div className='p-3'>
                        <h2 className='text-4xl font-bold mt-2 mb-2'>Hospital Website</h2>
                        <p className='font-medium text-gray-500 mb-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam.
                        </p>
                        <button className='text-xl font-bold border-b-2 border-sky-500 pb-1 '>Read More        
                        <ChevronRightIcon className="h-6 w-6 inline text-blue-500"/>
                        </button>
                    </div>
                </div>
                <div className='w-1/5 border-2 border-sky-400 rounded-lg'>
                    <img className='rounded-t-md' src={portfolio1} alt="" />
                    <div className='p-3'>
                        <h2 className='text-4xl font-bold mt-2 mb-2'>Hospital Website</h2>
                        <p className='font-medium text-gray-500 mb-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam.
                        </p>
                        <button className='text-xl font-bold border-b-2 border-sky-500 pb-1 '>Read More        
                        <ChevronRightIcon className="h-6 w-6 inline text-blue-500"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className="bg-sky-500 py-3 px-10 rounded text-white font-semibold text-lg mt-7">See All Portfolio 
                </button>   
            </div>
        </div>
    );
};

export default Portfolio;