"use client";

import React, { useState } from "react";
// import axios from "axios"; // Ensure axios is installed
import { ToastContainer, toast } from "react-toastify"; // Toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullname || !formData.email || !formData.mobile) {
      toast.error("All fields are required!");
      return;
    }

    // Google Form URL
    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdPzceJk5wWabdLu4AzA2_w7mOP9mfm7T21b9m_ZMHipC7kRg/formResponse";

    // Map your form fields to Google Form entry IDs
    const formBody = new URLSearchParams({
      "entry.848367419": formData.fullname, // Replace `123456` with your actual entry ID
      "entry.1437374729": formData.mobile, // Replace `789012`
      "entry.1741059603": formData.email, // Replace `345678`
    });

    try {
      // Send data to Google Form
      const response = await fetch(googleFormURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors", // Bypass CORS
      });

      // Show success message
      toast.success("Form submitted successfully!");
      setFormData({ fullname: "", mobile: "", email: "" }); // Reset form
    } catch (error) {
      // Show error message
      toast.error("An error occurred!");
    }
  };

  return (
    <>
      <div className="max-w-6xl md:mt-[50px] max-md:mt-[30px] md:h-[60vh] max-md:h-[50vh] mx-auto flex  justify-center items-center relative max-md:mt-2">
        <div className="md:w-[40%] max-md:h-[50vh] h-full relative flex justify-center items-center ">
          <img
            className="object-cover"
            fill
            src="/images/18.png"
            alt="No Preview"
          />
        </div>
        {/* <div className="absolute max-md:h-full md:w-[70%] max-md:w-[100%] md:top-[5vh] md:left-[25%] max-md:top-0 max-md:left-0 max-md:pt-6"> */}
          <div className="max-md:absolute max-md:top-0 max-md:left-0 md:px-6 max-md:px-3 max-md:py-2 bg-white rounded-[4px] md:h-[92%] max-md:h-full md:w-[60%] max-md:w-[100%] max-md:mx-auto flex flex-col justify-center">
            <p className="text-[#00215b] font-[800] md:text-[40px] max-md:text-[28px] max-md:text-center">
              <u>Contact Info</u>
            </p>
            <form
              onSubmit={handleSubmit}
              action="https://docs.google.com/forms/d/e/1FAIpQLSdPzceJk5wWabdLu4AzA2_w7mOP9mfm7T21b9m_ZMHipC7kRg/formResponse"
              method="post"
              className="w-full "
            >
              {/* Full Name */}
              <div className="w-[95%] max-md:mx-auto flex gap-2 px-2 items-center md:mt-5 max-md:mt-3 border-b border-gray-400">
                {/* <label htmlFor="fullname" className="text-sm">
                  Full Name
                </label> */}
                <FaUserCircle className="text-[18px] text-[#000]"/>
                <input
                  className="w-[90%] p-2 rounded-sm outline-none"
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter your Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="w-[95%] max-md:mx-auto flex gap-2 px-2 items-center md:mt-5 max-md:mt-3 border-b border-gray-400">
                {/* <label htmlFor="mobile" className="text-sm">
                  Mobile Number
                </label> */}
                <FaPhone className="text-[18px] text-[#000]"/>
                <input
                  className="w-[90%] p-2 rounded-sm outline-none"
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email ID */}
              <div className="w-[95%] max-md:mx-auto flex gap-2 px-2 items-center md:mt-5 max-md:mt-3 border-b border-gray-400">
                {/* <label htmlFor="email" className="text-sm">
                  Email ID
                </label> */}
                <MdEmail className="text-[18px] text-[#000]"/>
                <input
                  className="w-[90%] p-2 rounded-sm outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className=" md:text-[18px] text-[#fff] bg-[#fab731] hover:text-[#fab731] hover:bg-transparent border-2 border-[#fab731] w-full md:py-[10px] max-md:py-2 md:mt-2 max-md:mt-2 rounded-[5px]"
              >
                Submit
              </button>
            </form>
            <ToastContainer />
          </div>
        
      </div>
    </>
  );
};

export default HomeContact;
