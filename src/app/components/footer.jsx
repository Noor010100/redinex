// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//               <p>&copy; 2025 Restaurant Table Booking. All rights reserved.</p>

//     </div>
//   )
// }

// export default Footer

import Link from "next/link";
import React from "react";
// import { IoLogoInstagram } from "react-icons/io5";
// import { AiFillFacebook } from "react-icons/ai";
// import { SiTelegram } from "react-icons/si";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#00215b] md:mt-[50px] w-full h-full max-md:mt-[10px] ">
        <div className="max-w-6xl h-[1px] bg-[#FFF] mx-auto"></div>

        <div className="max-w-6xl md:px-4 max-md:px-6 flex mx-auto md:mt-8 max-md:mt-4">
          <div className="w-full h-full flex max-md:flex-col justify-between items-start md:mb-[30px] max-md:gap-[8px]">
            <div className="col-1 md:w-[50%] flex flex-col md:gap-[10px] max-md:gap-[10px] items-start">
              <div className="h-full flex">
                <Link href="/">
                  <img
                    src="/images/logo/Professional Logo.png"
                    className="md:h-[80px] max-md:h-10"
                    alt="Logo"
                  />
                </Link>
              </div>

              <h1 className="md:w-[70%] font-[700] md:text-[30px] max-md:text-[20px] text-[#FFF] ">
                We build the foundation for your dreams
              </h1>
            </div>
            {/* <div className="col-23 grid grid-cols-2 md:mb-[30px] max-md:gap-4 max-md:py-4 md:w-[50%]"> */}
            {/* <div className="col-2 flex flex-col md:gap-[24px] max-md:gap-[10px] ">
                <h2 className="text-[#f5880c] font-[600] md:text-[24px] max-md:text-[20px]">
                  Menu
                </h2>
                <div className="menu-cont flex flex-col items-left md:gap-[24px] max-md:gap-[6px]">
                  <Link
                    href="/"
                    className="md:text-[16px] max-md:text-[16px] font-[400] text-[#e7e7e7] hover:text-[#f5880c]"
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="md:text-[16px] max-md:text-[16px] font-[400] text-[#e7e7e7] hover:text-[#f5880c]"
                  >
                    About
                  </Link>

                  <Link
                    href="/services"
                    className="md:text-[16px] max-md:text-[16px] font-[400] text-[#e7e7e7] hover:text-[#f5880c]"
                  >
                    Services
                  </Link>

                  <Link
                    href="/projects"
                    className="md:text-[16px] max-md:text-[16px] font-[400] text-[#e7e7e7] hover:text-[#f5880c]"
                  >
                    Projects
                  </Link>

                  <Link
                    href="/contact"
                    className="md:text-[16px] max-md:text-[16px] font-[400] text-[#e7e7e7] hover:text-[#f5880c]"
                  >
                    Contact
                  </Link>
                </div>
              </div> */}
            <div className="col-3 flex flex-col md:gap-[24px] max-md:gap-[10px]  max-md:mt-4">
              <h2 className="text-[#fab731] font-[600] md:text-[24px] max-md:text-[20px]">
                <u>Connect with us</u>
              </h2>
              <div className="contact-col flex flex-col items-start md:gap-[24px] max-md:gap-4">
                <div className="flex gap-4 justify-center items-start">
                  <IoCall className="md:h-[20px] md:w-[20px] max-md:h-[16px] max-md:w-[16px] text-white rounded-lg" />
                  <div className="flex flex-col">
                    <Link href="tel:+917667877567">
                      <p className="text-[#e7e7e7] hover:text-[#fab731]  font-[400] md:text-[16px] max-md:text-[12px]">
                        +91 7667 877 567
                      </p>
                    </Link>
                    <Link href="tel:+919867909341">
                      <p className="text-[#e7e7e7] hover:text-[#fab731]  font-[400] md:text-[16px] max-md:text-[12px]">
                        +91 9867 909 341
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-start">
                  <RiMailFill className=" md:h-[20px] md:w-[20px]  text-white rounded-lg" />
                  <div className="flex flex-col">
                    <Link href="mailto:HR@redinexcontractor.com">
                      <p className="text-[#e7e7e7] hover:text-[#fab731]  font-[400] md:text-[16px] max-md:text-[12px]">
                        HR@redinexcontractor.com
                      </p>
                    </Link>
                    <Link href="mailto:PROJECT@redinexcontractor.com">
                      <p className="text-[#e7e7e7] hover:text-[#fab731] font-[400] md:text-[16px] max-md:text-[12px]">
                        PROJECT@redinexcontractor.com
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-start">
                  <IoLocationSharp className="md:h-[20px] md:w-[20px] max-md:h-[16px] max-md:w-[16px] text-white rounded-lg " />
                  <Link href="https://www.google.com/maps/place/RediNex+Contractor/@26.1423709,85.3486758,16z/data=!4m10!1m2!2m1!1sREDINEX+CONTRACTOR,+MBBL+COLLEGE+ROAD,+CHANDANI+CHOWK,+MUZAFFARPUR-842002!3m6!1s0x39ed17f48ced4d21:0xe4c7f7e4d04abd88!8m2!3d26.1456484!4d85.3484186!15sCklSRURJTkVYIENPTlRSQUNUT1IsIE1CQkwgQ09MTEVHRSBST0FELCBDSEFOREFOSSBDSE9XSywgTVVaQUZGQVJQVVItODQyMDAykgEUY29uc3RydWN0aW9uX2NvbXBhbnngAQA!16s%2Fg%2F11wc1s8s88?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D">
                    <p className="text-[#e7e7e7] hover:text-[#fab731] font-[400] md:text-[16px] max-md:text-[12px]">
                      REDINEX CONTRACTOR, <br /> MBBL COLLEGE ROAD, <br />{" "}
                      CHANDANI CHOWK, MUZAFFARPUR-842002
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="max-w-6xl h-[1px] bg-[#FFF] mx-auto max-md:mt-2"></div>
        <div className="copywrite h-full w-full flex items-center justify-center md:mt-[30px] max-md:mt-[10px]">
          <p className="font-[400] md:text-[16px] max-md:text-[12px] text-[#FFF] text-center">
            &copy; 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
