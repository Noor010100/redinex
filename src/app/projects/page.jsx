"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
// import Link from "next/link";
import React, { useState } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { openModal } from "../redux/slice/popupSlice";
import { useDispatch } from "react-redux";
import OtherSection from "../components/other-section";

const Page = () => {
  const dispatch = useDispatch();
  // const handleOpen = () => dispatch(openModal());
  const arr = [
    {
      img: "/images/projects/big family house.jpg",
      name: "Big Family House",
      det: "Create a spacious haven for your loved ones. We handle every detail, from multi-bedroom layouts to shared living areas, ensuring comfort and functionality for all.",
    },
    {
      img: "/images/projects/luxury house.webp",
      name: "Luxury House",
      det: "Experience unparalleled elegance.  Redinex elevates your vision, crafting a luxurious space with high-end finishes and innovative features.",
    },
    {
      img: "/images/projects/Small Family House.jpg",
      name: "Small Family House",
      det: "Make the most of every square foot. Our expertise maximizes space in charming and functional homes, perfect for creating lasting memories.",
    },
    {
      img: "/images/projects/Modern House.jpg",
      name: "Modern House",
      det: "Embrace contemporary style.  Redinex builds sleek and sophisticated structures, incorporating cutting-edge design and energy efficiency.",
    },
    {
      img: "/images/projects/beautiful house.jpeg",
      name: "Beautiful House",
      det: "Let your vision take shape.  We combine functionality with aesthetics, crafting a home as beautiful as it is livable, reflecting your unique style.",
    },
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrev = () => {
    setPhotoIndex((photoIndex + arr.length - 1) % arr.length);
  };
  const goToNext = () => {
    setPhotoIndex((photoIndex + 1) % arr.length);
  };

  return (
    <>
      <OtherSection
      img={"/images/4.png"}
        name={"Projects"}
        des={
          "Building beautiful, functional homes tailored to individual lifestyles, from cozy family houses to luxurious estates."
        }
      />

      <div className="max-w-6xl mx-auto md:px-4 md:mt-[50px] max-md:mt-[30px] max-md:px-4">
        <div className="md:mt-10 max-md:mt-5 flex flex-col items-start max-md:justify-center max-md:items-center">
          <p className="text-[#00215b] font-[800] md:text-[40px] max-md:text-[28px] max-md:text-center">
            <u>Our Projects</u>
          </p>
          <p className="md:text-[30px] max-md:text-[24px] max-md:text-center font-[500] tracking-tight text-[#bcbcbc]">
            Construction And Repairs
          </p>
        </div>
        <div className="grid md:grid-cols-2 max-md:grid-cols-1 md:gap-8 max-md:gap-6 md:my-4 max-md:my-2">
          {arr.map((ele, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-4 flex max-md:flex-col"
              onClick={() => {
                setPhotoIndex(i);
                setIsOpen(true);
              }}
            >
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
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative">
              <img
                className="max-w-[90vw] max-h-[80vh] h-[80vw] w-[60vw] object-cover"
                src={arr[photoIndex].img}
                alt="No Preview"
              />
              {/* <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl bg-white text-primary-main px-2 rounded"
                onClick={goToPrev}
              >
                &#129092;
              </button> */}
              {/* <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl bg-white text-primary-main px-2 rounded"
                onClick={goToNext}
              >
                &#129094;
              </button> */}
              <button
                className="absolute top-4 right-4 bg-white px-2 rounded pb-1 text-primary-main text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
