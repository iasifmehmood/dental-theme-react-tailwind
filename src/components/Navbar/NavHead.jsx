import React from "react";

import clock from "../../assets/clock.svg";
import phone from "../../assets/phone.svg";

const NavHead = () => {
  return (
    <div className="flex justify-center items-center md:gap-12 gap-1 max-w-[1200px] mx-auto px-5 mt-2">
      <div className="flex flex-row items-center gap-2 sm:text-xs text-[14px]">
        <img src={clock} alt="phone" height={20} width={20} />
        <div className="flex flex-row gap-2">
          <h4 className="font-bold">415-205-5550 (24/7)</h4>
        </div>
      </div>
      <div className="flex felx-row items-center gap-2 sm:text-xs text-[14px]">
        <img src={phone} alt="phone" height={20} width={20} />
        <div className="flex flex-row gap-2">
          <h4 className="font-bold">Monday-Friday (9AM-9PM)</h4>
        </div>
      </div>
    </div>
  );
};

export default NavHead;
