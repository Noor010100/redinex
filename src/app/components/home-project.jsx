"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/slice/popupSlice';

const HomeProject = () => {
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
            img: "/images/projects/big family house.jpg",
            name: "Big Family House",
            // det: "Create a spacious haven for your loved ones. We handle every detail, from multi-bedroom layouts to shared living areas, ensuring comfort and functionality for all.",
          },
          {
            img: "/images/projects/luxury house.webp",
            name: "Luxury House",
            // det: "Experience unparalleled elegance.  Redinex elevates your vision, crafting a luxurious space with high-end finishes and innovative features.",
          },
          {
            img: "/images/projects/Small Family House.jpg",
            name: "Small Family House",
            // det: "Make the most of every square foot. Our expertise maximizes space in charming and functional homes, perfect for creating lasting memories.",
          },
          {
            img: "/images/projects/Modern House.jpg",
            name: "Modern House",
            // det: "Embrace contemporary style.  Redinex builds sleek and sophisticated structures, incorporating cutting-edge design and energy efficiency.",
          },
          {
            img: "/images/projects/beautiful house.jpeg",
              name: "Beautiful House",
            //   det: "Let your vision take shape.  We combine functionality with aesthetics, crafting a home as beautiful as it is livable, reflecting your unique style.",
            },

    ]
    return (
        <div className="max-w-6xl mx-auto md:px-4 md:mt-[50px] max-md:mt-[30px] max-md:px-4">
            <div className="md:mt-10 max-md:mt-5 flex flex-col md:items-start">
                <p className="text-[#00215b] font-[800] md:text-[40px] max-md:text-[28px] max-md:text-center">
                    <u>Our Projects</u>
                </p>
                <p className="md:text-[30px] max-md:text-[18px] max-md:text-center font-[500] tracking-tight text-[#bcbcbc]">
                Construction And Repairs
                </p>
            </div>
            <div className='grid md:grid-cols-4 max-md:grid-cols-2 md:gap-x-4 md:gap-y-8 max-md:gap-y-4 md:my-4 max-md:my-2'>
                {
                    pack.slice(0, isStat).map((ele, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                            <div className="relative md:h-48 max-md:h-[20vh] w-full rounded-lg overflow-hidden">
                                <Image
                                    alt='No Preview'
                                    src={ele.img}
                                    fill
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="">

                                <p className="md:text-[20px] md:h-[40px] max-md:text-[16px] font-[500] text-[#00171F] my-2 flex items-center justify-center text-center">
                                    {ele.name}
                                </p>
                                {/* <div className="text-gray-500 md:text-[16px] max-md:text-[16px] md:mb-1 max-md:mb-2">{ele.det}</div> */}
                
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className='flex justify-center items-center'>
               <Link href={'/projects'}>
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

export default HomeProject;