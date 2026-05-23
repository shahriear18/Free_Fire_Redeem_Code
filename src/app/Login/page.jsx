'use client'
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import {
  FaFacebook,
  FaVk,
  FaApple,
  FaTwitter,
} from "react-icons/fa";

import { IoEye, IoEyeOff } from "react-icons/io5";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      
      {/* Background */}
      <section className="flex w-full h-full">
        <div className="BG w-1/2 h-full"></div>

        <div className="w-1/2 h-full bg-[#FFD543]"></div>
      </section>

      {/* Character */}
      <div className="absolute bottom-0 left-5 z-10">
        <img
          className="scale-[1.8] max-w-[320px]"
          src="cr2.png"
          alt=""
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0000008a] z-20 flex flex-col">
        
        {/* Navbar */}
        <section className="flex items-center justify-between px-6 py-2">
          <img className="h-[90px]" src="logo.png" alt="" />

          <button className="flex items-center gap-2 bg-white text-black text-sm font-bold px-5 py-2 rounded-md hover:scale-105 transition duration-300">
            Store <CiShoppingCart size={20} />
          </button>
        </section>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          
          {/* Heading */}
          <div className="text-white text-center mb-6">
            <h1 className="font-extrabold text-[23px]">
              Rewards Redemption Site
            </h1>

            <p className="text-[18px] mt-1">
              Please log in.
            </p>
          </div>

          {/* Login Box */}
          <div className="bg-white w-[360px] rounded-[14px] p-6 shadow-2xl">
            
            <h3 className="text-[22px] font-bold mb-5 text-center text-black">
              Enter Details Carefully
            </h3>

            <form className="flex flex-col gap-4">
              
              {/* Username */}
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-yellow-400"
                type="text"
                placeholder="Enter Username"
              />

              {/* Password */}
              <div className="relative">
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 outline-none focus:border-yellow-400"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[22px] text-gray-600"
                >
                  {showPassword ? <IoEyeOff /> : <IoEye />}
                </button>
              </div>

              {/* Submit */}
              <button className="bg-[#FFD543] text-black font-bold py-3 rounded-md hover:scale-[1.02] transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 px-5 pb-4">
          <img
            className="h-[50px] rounded-[10px]"
            src="images.png"
            alt=""
          />

          <div className="text-[#d1d1d1] text-sm">
            <p>Copyright © Garena International.</p>

            <p>Trademarks belong to their respective owners.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;