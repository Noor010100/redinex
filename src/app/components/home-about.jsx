import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const HomeAbout = () => {
  return (
    <>
    <div className="max-w-6xl md:h-30vh mx-auto flex max-md:flex-col justify-center items-end max-md:px-4 ">
      <div className="md:w-[60%] mx-auto md:px-4  max-md:mt-[30px] max-md:px-4">
        <div className="md:mt-10  flex flex-col items-start max-md:justify-center max-md:items-center">
          <p className="text-[#00215b] font-[800] md:text-[40px] max-md:text-[28px] max-md:text-center">
            <u>About Us</u>
          </p>
          <p className="md:text-[30px] max-md:text-[18px] max-md:text-center font-[500] tracking-tight text-[#bcbcbc]">
            Building Excellence in Muzaffarpur
          </p>
        </div>
      
        <div className="md:mt-4 max-md:mt-2 md:pr-4 flex flex-col ">
          <p className=" md:text-[18px] max-md:text-[16px] max-md:text-justify font-[400] text-[#545454] md:leading-[32px]">{`Redinex Contractor, a trusted name in construction with a rich legacy, offers services like General Contracting, Design & Consultancy, Project Management, and BIM (Building Information Modeling). Based in Muzaffarpur, we excel in Construction, Renovation, Painting, Interior Design, and Waterproofing. Committed to continuous quality improvement, we focus on practical solutions to eliminate defects. Combining experience, tradition, and values, we create inspiring spaces with innovative approaches, exceptional craftsmanship, and unwavering dedication, ensuring client satisfaction and a prosperous future.`} </p>
          {/* <p className="md:text-[18px] max-md:text-[16px] max-md:text-justify font-[400] text-[#545454] md:leading-[32px] md:mt-4">
          {`  Our team fosters a culture of continuous quality improvement, emphasizing practical solutions to eliminate defects. Combining experience, tradition, and values, REDINEX CONTRACTOR is committed to building a prosperous future with innovative approaches and unwavering dedication. We take pride in creating spaces that inspire, ensuring client satisfaction through exceptional craftsmanship and professional expertise.`}</p> */}
        </div>
        </div>
      
      
      <div className="md:w-[40%] h-full flex relative">
          <div className="relative h-full max-md:h-[26vh] w-full rounded-lg overflow-hidden">
            <img
              alt="No Preview"
              src="/images/9.png"
              fill
              //  className="h-full w-full object-cover"
            />
          </div>
        </div>
        </div>
    </>
  );
};

export default HomeAbout;
