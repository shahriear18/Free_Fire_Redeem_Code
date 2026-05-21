import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const page = () => {
  return (
    <div>
      <section>
        <div className=" absolute mt-[350px]">
          <img
            className=" ml-[50px] scale-[2.5] b-0 ml-7"
            src="charector.png"
            alt=""
          />
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
            <div className="flex justify-content-between">
              <img className=" h-[130px] " src="logo.png" alt="" />
              <div className=" flex items-center">
                <button className="flex items-center mt-[-20px] bg-white text-black text-xs font-bold px-8 py-3 rounded-md hover:scale-105 transition">
                  Store <CiShoppingCart className="ml-[5px]" />
                </button>
              </div>
            </div>
          </section>
          <div className="  ml-[-27px] text-[white]">
            <h1 className=" font-[800] text-center text-[23px]">
              Rewards Redemption Site
            </h1>
            <p className="text-[18px] text-center">Please log in.</p>
          </div>
        </div>{" "}
      </section>
    </div>
  );
};

export default page;
