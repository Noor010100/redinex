"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper core components
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Dummy data
const dummyData = [
  {
    img: "/images/15.png",
    val1: "From dream to reality, the foundation matters ",
    // val2: "convenience door to door ",
    // val3: "service.",
  },
  {
    img: "/images/14.png",
    val1: "Focusing on one dream project always.",
    // val2: "- we pick up, fix, and drop",
    // val3: "off at your door.",
  },
  {
    img: "/images/16.png",
    val1: "We build the foundation for your dreams.",
    // val2: "Best auto care at your ",
    // val3: "service.",
  },
];

const HeroSection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
      loop={true}
      autoplay={{
        delay: 2000, // Set autoplay delay to 1 second (1000ms)
        disableOnInteraction: false, // Keeps autoplay even when user interacts
      }}
      spaceBetween={30}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      className="mySwiper md:h-[40vw] max-md:h-[70vw] sm:h-[60vw] h-[80vw] relative"
    >
      {dummyData.map((ele, i) => (
        <SwiperSlide key={i} className="h-full relative w-full -z-10">
          {/* Using Next.js Image component */}
          <Image
            src={ele.img}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="absolute object-center top-0 left-0"
          />
          <div className="absolute inset-0 bg-[#0000007a]" />
          <div className="h-full w-full bg-black/30 absolute top-0 left-0" />
          <div className="absolute h-[100%] max-w-6xl top-0 md:left-[6vw] z-10 flex flex-col justify-center md:items-start max-md:items-center">
            <div className="xl:text-[3.5rem] max-md:w-[95%] md:text-4xl max-md:text-[28px] text-white font-semibold max-w-2xl md:leading-[4rem] md:text-start max-md:text-center max-md:mt-5">
              {ele.val1}
              
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
