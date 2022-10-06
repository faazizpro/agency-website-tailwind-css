import React from 'react';
import './Team.css'
import member1 from '../../images/member 1.jpg'
import member2 from '../../images/member 2.jpg'
import member3 from '../../images/member 3.png'
import member4 from '../../images/member 4.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


const Team = () => {
    return (
        <div className='team-bg pt-20'>
            <div className='text-center mb-10'>
                <h3 className='text-2xl font-bold mb-5'>Meet Our Team</h3>
                <h2 className='text-5xl font-bold'>Our Expert Members</h2>
                <p className='mt-5 font-medium text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis animi <br /> tempora quo vero cumque iusto  autem magni.
                </p>
            </div>

            {/* Team Member Starts */}
            <div id='main-team-section' className='pl-20 pb-20 flex justify-center gap-24   '>
                <div id='team-card' className='w-64 relative'>
                    <img src={member1} className='w-64' alt="" />

                    {/* Team Icon & Info */}
                    <div className='bg-white rounded w-5/6 absolute top-64 left-5 drop-shadow-xl'>
                        {/* Icons */}
                        <div className='flex gap-5  pt-3 pb-2 pl-3 '>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faPinterestP} />
                            <FontAwesomeIcon icon={faDribbble} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        {/* Team Info */}
                        <div className='pl-3 pb-2'>
                            <h3 className='text-2xl font-bold'>Jane Cooper</h3>
                            <p className='text-gray-500 font-semibold text-lg'>Developer</p>
                        </div>
                    </div>
                </div>
                <div id='team-card' className='w-64 relative'>
                    <img src={member2} className='w-64' alt="" />

                    {/* Team Icon & Info */}
                    <div className='bg-white rounded w-5/6 absolute top-64 left-5 drop-shadow-xl'>
                        {/* Icons */}
                        <div className='flex gap-5  pt-3 pb-2 pl-3 '>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faPinterestP} />
                            <FontAwesomeIcon icon={faDribbble} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        {/* Team Info */}
                        <div className='pl-3 pb-2'>
                            <h3 className='text-2xl font-bold'>Jane Cooper</h3>
                            <p className='text-gray-500 font-semibold text-lg'>Developer</p>
                        </div>
                    </div>
                </div>
                <div id='team-card' className='w-64 relative'>
                    <img src={member3} className='w-64' alt="" />

                    {/* Team Icon & Info */}
                    <div className='bg-white rounded w-5/6 absolute top-64 left-5 drop-shadow-xl'>
                        {/* Icons */}
                        <div className='flex gap-5  pt-3 pb-2 pl-3 '>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faPinterestP} />
                            <FontAwesomeIcon icon={faDribbble} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        {/* Team Info */}
                        <div className='pl-3 pb-2'>
                            <h3 className='text-2xl font-bold'>Jane Cooper</h3>
                            <p className='text-gray-500 font-semibold text-lg'>Developer</p>
                        </div>
                    </div>
                </div>
                <div id='team-card' className='w-64 relative'>
                    <img src={member4} className='w-64' alt="" />

                    {/* Team Icon & Info */}
                    <div className='bg-white rounded w-5/6 absolute top-64 left-5 drop-shadow-xl'>
                        {/* Icons */}
                        <div className='flex gap-5  pt-3 pb-2 pl-3 '>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faPinterestP} />
                            <FontAwesomeIcon icon={faDribbble} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        {/* Team Info */}
                        <div className='pl-3 pb-2'>
                            <h3 className='text-2xl font-bold'>Jane Cooper</h3>
                            <p className='text-gray-500 font-semibold text-lg'>Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;