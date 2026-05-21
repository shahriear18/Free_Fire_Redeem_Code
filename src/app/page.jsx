import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaFacebook, FaVk, FaApple, FaTwitter } from "react-icons/fa";

const Page = () => {
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
          className="scale-[2.1] max-w-[300px]"
          src="cr2.png"
          alt=""
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0000008a] z-20 flex flex-col">
        
        {/* Navbar */}
        <section className="flex items-center justify-between px-6 py-2">
          <img className="h-[100px]" src="logo.png" alt="" />

          <button className=" mt-[-10px] flex items-center gap-1 bg-white text-black text-sm font-bold px-6 py-3 rounded-md hover:scale-105 transition">
            Store <CiShoppingCart />
          </button>
        </section>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center">
          
          {/* Heading */}
          <div className="text-white text-center mt-[-10px]">
            <h1 className="font-extrabold text-[24px]">
              Rewards Redemption Site
            </h1>

            <p className="text-[18px]">Please log in.</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            
            <div className="text-[#3939ff] flex justify-center items-center h-[50px] w-[50px] rounded-full bg-white">
              <FaFacebook size={28} />
            </div>

            <div className="text-[#4b75ff] flex justify-center items-center h-[50px] w-[50px] rounded-full bg-white">
              <FaVk size={28} />
            </div>

            <div className="flex justify-center items-center h-[50px] w-[50px] rounded-full bg-white">
              <img className="w-[28px]" src="glogo.png" alt="" />
            </div>

            <div className="flex justify-center items-center h-[50px] w-[50px] rounded-full bg-white">
              <FaApple size={28} />
            </div>

            <div className="text-[#39a5fd] flex justify-center items-center h-[50px] w-[50px] rounded-full bg-white">
              <FaTwitter size={28} />
            </div>
          </div>

          {/* Notice Box */}
          <div className="bg-white w-[340px] rounded-[12px] p-5 mt-6 shadow-lg">
            
            <h3 className="text-[20px] font-bold mb-3">
              Important Notice :
            </h3>

            <div className="text-[14px] space-y-3">
              <p>
                1. Redemption code has{" "}
                <span className="text-[#ff3c00] font-bold">12/16</span>{" "}
                characters, consisting of capital letters and numbers.
              </p>

              <p>
                2. Item rewards are shown in{" "}
                <span className="text-[#ff3c00] font-bold">[vault]</span> tab
                in game lobby.
              </p>

              <p>
                3. Please note redemption expiration date. Expired codes
                cannot be redeemed.
              </p>

              <p>
                4. Please contact customer service if you encounter issues.
              </p>

              <p>
                5. Guest accounts cannot redeem rewards. Bind your account
                to Facebook or VK.
              </p>
            </div>
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