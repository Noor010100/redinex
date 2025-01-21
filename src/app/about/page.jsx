import React from "react";
import HomeAbout from "../components/home-about";
import { AiOutlineDoubleRight } from "react-icons/ai";
import OtherSection from "../components/other-section";
import { GrUserWorker } from "react-icons/gr";

const Page = () => {
  return (
    <div>
       <OtherSection img={"/images/2.png"} name={"About"} des={"Redinex Contractor delivers quality construction solutions in Muzaffarpur, trusted for projects of all sizes."}/>
      <div className="max-w-6xl mx-auto">
        <HomeAbout />
        <div className="md:mt-4 max-md:mt-4">
          <p className="text-[#00215b] font-[800] md:text-[40px] max-md:text-[28px] max-md:text-center">
            <u>Our Strengths</u>
          </p>
          <div className="flex flex-col gap-2 md:mt-2 max-md:mt-4">
            <div className="w-full flex items-center gap-2 md:py-2 md:px-2 bg-slate-200 max-md:px-4">
              <AiOutlineDoubleRight className="max-md:w-[10%] md:text-[20px] max-md:text-[16px]"/>
              <p className="md:text-[18px] max-md:text-[14px] text-[#545454] ">
                With innovative ideas and quality products, we always strive to
                achieve excellence in all our projects.
              </p>
            </div>
            <div className="w-full flex items-center gap-2 md:py-2 md:px-2 bg-slate-200 max-md:px-4">
              <AiOutlineDoubleRight className="max-md:w-[10%] md:text-[20px] max-md:text-[16px]" />
              <p className="md:text-[18px] max-md:text-[14px] text-[#545454] ">
                Teamwork is the core reason for the success of any project and
                our satisfied customer list. We support and respect each other.
              </p>
            </div>
            <div className="w-full flex items-center gap-2 md:py-2 md:px-2 bg-slate-200 max-md:px-4">
              <AiOutlineDoubleRight className="max-md:w-[10%] md:text-[20px] max-md:text-[16px]" />
              <p className="md:text-[18px] max-md:text-[14px] text-[#545454] ">
              We have built a legacy of excellence with dedication and commitment, and we remain steadfast in upholding it without compromise.
              </p>
            </div>
            <div className="w-full flex items-center gap-2 md:py-2 md:px-2 bg-slate-200 max-md:px-4">
              <AiOutlineDoubleRight className="max-md:w-[10%] md:text-[20px] max-md:text-[16px]" />
              <p className="md:text-[18px] max-md:text-[14px] text-[#545454] ">
                Delivery of any project on time is of utmost priority to REDINEX
                thereby obtaining a complete satisfaction of our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="md:mt-6 max-md:mt-4 grid md:grid-cols-3 max-md:grid-rows-3 md:gap-2 ">
          <div className="flex flex-col justify-center items-center text-center gap-2  py-4 px-6">
          <div className="bg-[#fab731] md:h-[130px] max-md:h-[100px] md:w-[130px] max-md:w-[100px] rounded-full flex justify-center items-center">
          <GrUserWorker className="md:text-[#00215b] md:text-[60px] max-md:text-[40px]"/>
            </div>
            <p className="font-[600] md:text-[30px] max-md:text-[20px] max-md:text-center text-[#000]">
              <u>Vision</u>
            </p>
            <p className="font-[500] md:text-[16px] max-md:text-[14px] max-md:text-center text-[#000]">
              To be the preferred, trusted and successful long term partner to
              our stakeholder’s clients, associates and our employees. To stay
              viable and relevant through practical innovation and a continuous
              focus on efficient and consistent execution of all types of
              infrastructure intervention
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2 py-4 px-6">
            <div className="bg-[#fab731] md:h-[130px] max-md:h-[100px] md:w-[130px] max-md:w-[100px] rounded-full flex justify-center items-center">
          <GrUserWorker className="md:text-[#00215b] md:text-[60px] max-md:text-[40px]"/>
            </div>
            <p className="font-[600] md:text-[30px] max-md:text-[20px] max-md:text-center text-[#000]">
              <u>Mission</u>
            </p>
            <p className="font-[500] md:text-[16px] max-md:text-[14px] max-md:text-center text-[#000]">
              To be the preferred, trusted and successful long term partner to
              our stakeholder’s clients, associates and our employees. To stay
              viable and relevant through practical innovation and a continuous
              focus on efficient and consistent execution of all types of
              infrastructure intervention
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2 py-4 px-6">
          <div className="bg-[#fab731] md:h-[130px] max-md:h-[100px] md:w-[130px] max-md:w-[100px] rounded-full flex justify-center items-center">
          <GrUserWorker className="md:text-[#00215b] md:text-[60px] max-md:text-[40px]"/>
            </div>
            <p className="font-[600] md:text-[30px] max-md:text-[20px] max-md:text-center text-[#000]">
              <u>Goal</u>
            </p>
            <p className="font-[500] md:text-[16px] max-md:text-[14px] max-md:text-center text-[#000]">
              To be the preferred, trusted and successful long term partner to
              our stakeholder’s clients, associates and our employees. To stay
              viable and relevant through practical innovation and a continuous
              focus on efficient and consistent execution of all types of
              infrastructure intervention
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
