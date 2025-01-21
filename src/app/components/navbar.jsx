"use client"

/* eslint-disable @next/next/no-img-element */

import { usePathname } from 'next/navigation';
import React from 'react'
import { IoCall } from "react-icons/io5";
// import PhoneNavbarDrawer from './phoneNavbarDrawer';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/slice/popupSlice';
import Link from 'next/link';
import PhoneMenu from './phoneMenu';
// import PhoneMenu from './phoneMenu';
// import PhoneMenu from './phoneMenu';
// import Image from 'next/image';

const Navbar = () => {
  const path = usePathname();
  const dispatch = useDispatch();
  const handleModalOpen = () => (
    dispatch(openModal())
  )
  const arr = [
    {
      name:'Home',
      link:'/'
    },
    {
      name:'About',
      link:'/about'
    },
    {
      name:'Services',
      link:'/services'
    },
    {
      name:'Projects',
      link:'/projects'
    },
    {
      name:'Contact',
      link:'/contact' 
    },
  ]
  return (
    <nav className="z-20 w-full absolute top-0 left-0 py-4">
  <div className="max-w-6xl xl:px-0 px-2 mx-auto flex items-center justify-between max-md:py-2 max-md:px-4">
    <Link
      href="/">
      <img
        src="/images/logo/Professional Logo.png"
         className="md:h-[80px] max-md:h-10 max-md:pl-2"
        alt="Logo"
      />
    
    </Link>
    <div
      data-collapse-toggle="navbar-default"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-[24px] text-[#f5880c] rounded-lg md:hidden "
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
     <PhoneMenu />
    </div>
    <div className="w-full max-md:hidden md:block md:w-auto" id="navbar-default">
      <ul className="font-[600] md:text-[18px] flex gap-10 p-4 md:p-0 mt-4 md:flex-row md:mt-0 text-[#fff] ">
      {
        arr.map((ele,i) => (
        <li key={i}>
          <Link
            href={ele.link}
            className={`hover:text-[#fab731] ${ele.link === path && "text-[#fab731]"}`}
          >
            {ele.name}
          </Link>
        </li>

        ))
      }
      </ul>
    </div>
      {/* <div className='max-md:hidden'>
      <Link 
      href="tel:+918827167446">
      <button
        onClick={handleModalOpen}
        className="md:py-[14px] max-md:py-[10px] md:px-[28px] max-md:px-[14px] max-md:text-[16px] bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] md:rounded-[40px] max-md:rounded-[20px] flex gap-2 justify-center items-center"
        type="button"
      >
        <IoCall />
        <p>Call Now</p>
      </button>
      </Link>

      </div> */}
  </div>
</nav>

  )
}

export default Navbar