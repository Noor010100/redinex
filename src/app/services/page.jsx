"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
// import { openModal } from "../redux/slice/popupSlice";
import { useDispatch } from "react-redux";
import OtherSection from "../components/other-section";

const Page = () => {
  const dispatch = useDispatch();
//   const handleOpen = () => dispatch(openModal());
  const arr = [
    {
      img: '/images/services/General Contracting.jpg',
      name: "General Contracting",
      det: "We handle every aspect of your construction project, from planning and budgeting to final completion.",
    },
    {
      img: '/images/services/Design & Consulting.jpg',
      name: "Design & Consulting",
      det: "Our team of experts will work with you to bring your vision to life, from initial concept to detailed plans.",
    },
    {
      img: '/images/services/Construction Project Management.jpg',
      name: "Construction Project Management",
      det: "We keep your project on track, on time, and within budget.",
    },
    {
      img: '/images/services/BIM (Building Information Modeling).jpg',
      name: "BIM (Building Information Modeling)",
      det: "We leverage cutting-edge technology to create a digital model of your project, improving efficiency and collaboration.",
    },
  ];
  return (
    <>
    <OtherSection 
    img={"/images/6.png"}
    name={"Services"} des={"We manage every construction phase, ensuring quality, efficiency, and on-time project completion for diverse needs."}/>
    
    <div className="max-w-6xl mx-auto md:px-4 md:mt-[50px] max-md:mt-[30px] max-md:px-4">
      <div className="md:mt-10 max-md:mt-5 flex flex-col items-start max-md:justify-center max-md:items-center">
        <p className="text-[#00215b] font-[800] md:text-[40px] max-md:text-[28px] max-md:text-center">
          <u>Services</u>
          </p>
        <p className="md:text-[30px] max-md:text-[24px] max-md:text-center font-[500] tracking-tight text-[#bcbcbc]">
          What we provide
        </p>
      </div>
      <div className="grid md:grid-cols-2 max-md:grid-cols-1 md:gap-8 max-md:gap-6 md:my-4 max-md:my-2">
        {arr.map((ele, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-4 flex max-md:flex-col">
            <div className="relative md:h-[40vh] max-md:h-[26vh] md:w-[50%] rounded-lg overflow-hidden">
              <Image
                alt="No Preview"
                src={ele.img}
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-[50%] md:p-4">
              <p className="md:text-[20px] md:h-[52px] max-md:text-[20px] font-[600] text-[#00171F] my-2 max-md:text-center">
                <u>{ele.name}</u>
              </p>
              <div className="text-gray-500 md:text-[16px] max-md:text-[16px] md:mb-1 max-md:mb-2 max-md:text-center">
                {ele.det}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center">
                <Link
                    href={'/service'}
                    className="inline-block font-medium max-md:text-[16px] bg-[#1A3D97] border-2 hover:bg-[#FFF] hover:text-[#1A3D97] text-[#FFF] w-fit md:mt-6 max-md:mt-2 border-[#1A3D97] md:py-[14px] max-md:py-[10px] md:px-[36px] max-md:px-[22px] rounded-full"
                >
                    View All
                </Link>
            </div> */}
    </div>
    </>
  );
};

export default Page;
