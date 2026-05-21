import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <section>
        <div className=" absolute mt-[350px]">
          <img className=" scale-[2.4] ml-7" src="cr2.png" alt="" />
        </div>
      </section>
      <section>
        <div className=" flex">
          <div className="BG w-[50%]"></div>
          <div className=" w-[50%] bg-[#FFD543] h-[750px]"></div>
        </div>
      </section>
      <section>
        <div className="h-[900px] bg-[#0000008a] w-100 absolute top-0  z-[9999]">
          <section>
            <div className="flex justify-content-between mt-[-10px]">
              <img className=" h-[130px] " src="logo.png" alt="" />
              <div className=" flex items-center">
                <button className="flex items-center mt-[-20px] bg-white text-black text-xs font-bold px-8 py-3 rounded-md hover:scale-105 transition">
                  Store <CiShoppingCart className="ml-[5px]" />
                </button>
              </div>
            </div>
          </section>
          <div className="  ml-[-27px] text-[white] mt-[-20px]">
            <h1 className=" font-[800] text-center text-[23px]">
              Rewards Redemption Site
            </h1>
            <p className="text-[18px] text-center">Please log in.</p>
          </div>
          <div className=" flex justify-around ml-[-27px] mt-[20px]">
            <div className=" flex gap-3 ">
              <div className="text-[#3939ff] flex justify-center items-center h-[50px] w-[50px] rounded-[100%] bg-[#ffffff]">
                <FaFacebook size={30} />
              </div>
              <div className="text-[#4b75ff] flex justify-center items-center h-[50px] w-[50px] rounded-[100%] bg-[#ffffff]">
                <FaVk size={30} />
              </div>
              <div className=" flex justify-center items-center h-[50px] w-[50px] rounded-[100%] bg-[#ffffff]">
                <img src="glogo.png" alt="" />
              </div>
              <div className=" flex justify-center items-center h-[50px] w-[50px] rounded-[100%] bg-[#ffffff]">
                <FaApple size={30} />
              </div>
              <div className="text-[#39a5fd] flex justify-center items-center h-[50px] w-[50px] rounded-[100%] bg-[#ffffff]">
                <FaTwitter size={30} />
              </div>
            </div>
          </div>
          <div className="w-[325px] mt-[30px]">
            <div className=" h-[400px] w-[100%] bg-[white] m-[20px] rounded-[10px]">
              <h3 className=" p-[10px] text-[19px] font-[700]">
                Important Notice :
              </h3>
              <p className=" ml-[8px]">
                1.Redemption code has{" "}
                <span className="text-[#ff3c00]">12/16</span> characters,
                consisting of capital letters and numbers.
              </p>
              <p className=" ml-[8px] mt-[5px]">
                2. Item rewards are shown in{" "}
                <span className="text-[#ff3c00]"> [vault]</span> tab in game
                lobby; Golds or diamonds will add in account wallet
                automatically.
              </p>
              <p className=" ml-[8px] mt-[5px]">
                3. Please note redemption expiration date. Any expired codes
                cannot be redeemed.
              </p>
              <p className=" ml-[8px] mt-[5px]">
                4. Please contact customer service if you encountered any issue.
              </p>
              <p className=" ml-[8px] mt-[5px]">
                5. Reminder: you will not be able to redeem your rewards with
                guest accounts. You may bind your account to Facebook or VK in
                order to receive the rewards.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex p-[20px] mt-[-30px]">
              <img
                className=" h-[50px] rounded-[10px]"
                src="images.png"
                alt=""
              />
                <div className=" text-[#cecece] ml-[5px]">
                  <p>Copyright © Garena International.</p>
                  <p>
                    Trademarks belong. All rights
                    Reserved.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
