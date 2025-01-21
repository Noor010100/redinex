/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OtherSection = ({img, name, des }) => {
    return (
        <>
            <div className="md:h-[35vw] w-full relative max-md:h-[65vw] text-[#1A3D97] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={img}
                        fill
                        alt="Background Image"
                        className="object-cover object-center w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#0000007a]" />
                </div>
                <div className="relative max-w-6xl mx-auto z-10 flex flex-col justify-center items-center h-full text-center max-md:px-4">
                    <div className='flex flex-col gap-2'>
                    <p className="font-[800]  md:text-[40px] max-md:text-[24px] max-md:text-center text-[#fff]"><u>{name}</u></p>
                        <p className="md:w-[60%] mx-auto text-[#fff] md:text-[20px] max-md:text-[14px]">{des}</p>
                        
                       </div>

                    </div>
                </div>
           
        </>
    )
}

export default OtherSection