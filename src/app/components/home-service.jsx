"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/slice/popupSlice';

const HomeService = () => {
    const [isStat, settIsStat] = useState(4);
    const handleMore = () => {
        settIsStat(isStat + 4)
    }
    const dispatch = useDispatch();
    // const handleOpen = () => (
    //     dispatch(openModal())
    // )
    const pack = [

        {
            img: '/images/services/General Contracting.jpg',
            name: 'General Contracting',
            // det: 'We handle every aspect of your construction project, from planning and budgeting to final completion.'
        },
        {
            img: '/images/services/Design & Consulting.jpg',
            name: 'Design & Consulting',
            // det: 'Our team of experts will work with you to bring your vision to life, from initial concept to detailed plans.'
        },
        {
            img: '/images/services/Construction Project Management.jpg',
            name: 'Construction Project Management',
            // det: 'We keep your project on track, on time, and within budget.'
        },
        {
            img: '/images/services/BIM (Building Information Modeling).jpg',
            name: 'BIM (Building Information Modeling)',
            // det: 'We leverage cutting-edge technology to create a digital model of your project, improving efficiency and collaboration.'
        },

    ]
    return (
        <div className="max-w-6xl mx-auto md:px-4 md:mt-[50px] max-md:mt-[30px] max-md:px-4">
            <div className="md:mt-10 max-md:mt-5 flex flex-col md:items-start">
                <p className="text-[#00215b] font-[800] md:text-[40px] max-md:text-[28px] max-md:text-center">
                    <u>Services</u>
                </p>
                <p className="md:text-[30px] max-md:text-[18px] max-md:text-center font-[500] tracking-tight text-[#bcbcbc]">
                    What we provide
                </p>
            </div>
            <div className='grid md:grid-cols-4 max-md:grid-cols-2 md:gap-x-4 md:gap-y-8 max-md:gap-2 max-md:gap-y-4 md:my-4 max-md:my-2'>
                {
                    pack.slice(0, isStat).map((ele, i) => (
                        <Link href={'/services'}>
                        <div key={i} className="bg-white h-full max-md:mx-auto rounded-lg shadow-lg md:p-4 max-md:p-2 max-w-sm max-md:w-full">
                            <div className="relative md:h-48 max-md:h-[20vh] w-full rounded-lg overflow-hidden">
                                <Image
                                    alt='No Preview'
                                    src={ele.img}
                                    fill
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="">

                                <p className="md:text-[20px] md:h-[52px] max-md:text-[16px] font-[500] text-[#00171F] my-2 text-center">
                                    {ele.name}
                                </p>
                                {/* <div className="text-gray-500 md:text-[16px] max-md:text-[16px] md:mb-1 max-md:mb-2">{ele.det}</div> */}
                
                            </div>
                        </div>
                        </Link>

                    ))
                }
            </div>
            <div className='flex justify-center items-center'>
               <Link href={'/services'}>
                        <button onClick={handleMore} className="inline-block font-medium max-md:text-[16px] bg-[#00215b] border-2 border-[#00215b] hover:bg-[#FFF] hover:text-[#00215b] text-[#FFF] w-fit md:mt-6 max-md:mt-2 md:py-[14px] max-md:py-[8px] md:px-[36px] max-md:px-[20px] rounded-full">View More</button>
                        </Link>
                
            </div>
            {/* <div className='grid md:grid-cols-3 md:gap-x-4 md:gap-y-8 max-md:gap-y-4 md:my-4 max-md:my-2'>
               <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm" >
               <h1 className='md:text-[20px] max-md:text-[20px] font-[500] text-[#00171F] my-2'>Installation</h1>
               <p className='text-gray-500 md:text-[16px] max-md:text-[16px] md:mb-1 max-md:mb-2'>Our skilled & expert team provides efficient and quick installation of anti insect nets to our clients within the stipulated time.</p>
               </div>
               <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm" >
               <h1 className='md:text-[20px] max-md:text-[20px] font-[500] text-[#00171F] my-2'>Repair</h1>
               <p className='text-gray-500 md:text-[16px] max-md:text-[16px] md:mb-1 max-md:mb-2'>Our team is proficient in providing a wide range of reliable & quick repairing services to our clients according to their needs.</p>
               </div>
               <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
               <h1 className='md:text-[20px] max-md:text-[20px] font-[500] text-[#00171F] my-2'>Reparation</h1>
               <p className='text-gray-500 md:text-[16px] max-md:text-[16px] md:mb-1 max-md:mb-2'>Due to opulent industry expertise and practice, we are proficient in repairing installed nets.</p>
               </div>
            </div> */}
        </div>
    );
};

export default HomeService;