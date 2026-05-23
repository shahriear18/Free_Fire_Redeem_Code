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
    <div className="w-screen h-screen overflow-hidden relative font-sans">
      
      {/* Background */}
      <section className="flex w-full h-full">
        <div className="BG w-1/2 h-full"></div>

        <div className="w-1/2 h-full bg-[#FFD543]"></div>
      </section>

      {/* Character */}
      <div className="absolute bottom-0 left-3 z-10">
        <img
          className="scale-[1.8] max-w-[320px] select-none"
          src="cr2.png"
          alt="character"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000090] z-20 flex flex-col">
        
        {/* Navbar */}
        <section className="flex items-center justify-between px-6 py-3">
          
          <img
            className="h-[85px] object-contain"
            src="logo.png"
            alt="logo"
          />

          <button className="flex items-center gap-2 bg-white text-black text-sm font-bold px-5 py-2 rounded-lg hover:scale-105 transition duration-300 shadow-md">
            Store
            <CiShoppingCart size={20} />
          </button>
        </section>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          
          <div className="w-[360px]">
            
            {/* Heading */}
            <div className="text-center text-white mb-6">
              <h1 className="text-[23px] font-extrabold tracking-wide">
                Rewards Redemption Site
              </h1>

              <p className="text-[17px] mt-1 text-gray-200">
                Enter Details carefully
              </p>
            </div>

            {/* Login Card */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              
              <h2 className="text-[24px] font-bold text-center text-black mb-6">
                Enter Info To Claim
              </h2>

              <form className="flex flex-col gap-5">
                
                {/* UID */}
                <div>
                  <p className="mb-2 text-[15px] font-semibold text-gray-700">
                    Enter Your UID
                  </p>

                  <input
                    type="text"
                    placeholder="Enter FF ID"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#FFD543] focus:ring-2 focus:ring-yellow-200 transition"
                  />
                </div>

                {/* Redeem Code */}
                <div>
                  <p className="mb-2 text-[15px] font-semibold text-gray-700">
                    Enter Redeem Code
                  </p>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Redeem Code"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:border-[#FFD543] focus:ring-2 focus:ring-yellow-200 transition"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[22px] text-gray-500 hover:text-black transition"
                    >
                      {showPassword ? (
                        <IoEyeOff />
                      ) : (
                        <IoEye />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-[#FFD543] text-black font-bold py-3 rounded-lg hover:scale-[1.02] hover:brightness-95 transition duration-300 shadow-md"
                >
                  Submit
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 px-5 pb-4">
          
          <img
            className="h-[50px] rounded-lg"
            src="images.png"
            alt="footer-logo"
          />

          <div className="text-[#d1d1d1] text-sm">
            <p>
              Copyright © Garena International.
            </p>

            <p>
              Trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;