import React from 'react'
import { IoCall } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMail } from "react-icons/io5";
import HomeContact from '../components/home-contact';
import Link from 'next/link';
import OtherSection from '../components/other-section';

const Page = () => {
  return (
    <>
          <OtherSection img={"/images/11.png"} name={"Contact"} des={"Reach out to us for inquiries or project discussions. We're available by phone, email, or at our office address. Let's build together!"}/>
           {/* <div className="max-w-6xl mx-auto bg-blue-300"> */}
        <HomeContact /> 
        <div className="max-w-6xl grid md:grid-cols-2 grid-cols-1 shadow-lg md:gap-10 sm:gap-6 gap-4 md:mt-[50px]  mx-auto xl:px-0 md:px-6 max-md:px-4 max-md:py-6">
        <div className="rounded-lg overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7163.335692347816!2d85.3486758!3d26.1423709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed17f48ced4d21%3A0xe4c7f7e4d04abd88!2sRediNex%20Contractor!5e0!3m2!1sen!2sin!4v1737474392375!5m2!1sen!2sin"
        //  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            width="100%"
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            />

            </div>
            <div className="">
                <p className="text-[#00215b] font-[800] md:text-[40px] max-md:text-[28px] max-md:text-center">
                    <u>Connect with us</u>
                    </p>
                {/* <p className="md:text-[16px] max-md:text-[12px]">Lorem ipsum</p> */}
                <div className="flex md:gap-6 max-md:gap-4 md:mt-12 max-md:mt-6">
                    <IoCall className="text-4xl bg-[#fab731] text-white p-2 rounded-lg" />
                    <div>
                        <p className="md:text-[22px] font-[600] text-[#000]">Phone</p>
                        <Link href='' className='flex flex-col'>
                        <p className="text-[#667479] hover:text-[#00171F] md:text-[16px] font-[400] hover:font-[600] cursor-pointer max-md:text-[14px] md:mt-1.5 max-md:mt-1">+91 7667 877 567</p>
                        <p className="text-[#667479] hover:text-[#00171F] md:text-[16px] font-[400] hover:font-[600] cursor-pointer max-md:text-[14px] md:mt-1.5 max-md:mt-1">+91 9867 909 341</p> 
                        </Link>
                    </div>
                </div>
                <div className="flex md:gap-6 gap-4 md:my-10 sm:my-8 my-6">
                    <IoMail className="text-4xl bg-[#fab731] text-white p-2 rounded-lg" />
                    <div>
                        <p className="md:text-[22px] font-[600] text-[#000]">Email</p>
                       <Link href='https://mail.google.com/mail/'>
                       <p className="text-[#667479] hover:text-[#00171F] md:text-[16px] font-[400] hover:font-[600] cursor-pointer max-md:text-[14px] md:mt-1.5 max-md:mt-1">HR@redinexcontractor.com</p>
                       </Link>
                       <Link href='https://mail.google.com/mail/'>
                       <p className="text-[#667479] hover:text-[#00171F] md:text-[16px] font-[400] hover:font-[600] cursor-pointer max-md:text-[14px] md:mt-1.5 max-md:mt-1">PROJECT@redinexcontractor.com</p>
                       </Link>
                    </div>
                </div>
                <div className="flex md:gap-6 gap-4 md:my-10 sm:my-8 my-6">
                    <FaLocationDot className="text-4xl bg-[#fab731] text-white p-2 rounded-lg" />
                    <div>
                        <p className="md:text-[22px] font-[600] text-[#000]">Location</p>
                        <Link href='https://www.google.com/maps/place/RediNex+Contractor/@26.1423709,85.3486758,16z/data=!4m10!1m2!2m1!1sREDINEX+CONTRACTOR,+MBBL+COLLEGE+ROAD,+CHANDANI+CHOWK,+MUZAFFARPUR-842002!3m6!1s0x39ed17f48ced4d21:0xe4c7f7e4d04abd88!8m2!3d26.1456484!4d85.3484186!15sCklSRURJTkVYIENPTlRSQUNUT1IsIE1CQkwgQ09MTEVHRSBST0FELCBDSEFOREFOSSBDSE9XSywgTVVaQUZGQVJQVVItODQyMDAykgEUY29uc3RydWN0aW9uX2NvbXBhbnngAQA!16s%2Fg%2F11wc1s8s88?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D'>
                        <p className="text-[#667479] hover:text-[#00171F] md:text-[16px] font-[400] hover:font-[600] cursor-pointer max-md:text-[14px] md:mt-1.5 max-md:mt-1">REDINEX CONTRACTOR, <br className='md:hidden' /> MBBL COLLEGE ROAD, <br /> CHANDANI CHOWK, MUZAFFARPUR-842002</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* </div> */}
    </>
  )
}

export default Page