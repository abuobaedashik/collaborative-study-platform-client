import { title } from "framer-motion/client";
import React from "react";

const DynamicTitle = ({subtitle,title,heading}) => {
  return (
    <div>
      <div className="my-8 mx-auto px-20 py-4 flex flex-col items-center rounded-xl  justify-center bg-[#ffffff] w-full  gap-2 ">
        <div className="text-3xl flex items-center flex-col rounded-2xl  ">
          <div className=" text-sm text-[#FE753F] font-custom mb-2">------ {heading} ------</div>
          <p className="text-4xl font-bold font-roboto text-[#1a2330] mb-2">
           {title}
          </p>
        </div>
        <div className="text-base mb-5 font-normal font-nunito text-[#486b9b] ">
           {subtitle}
        </div>
      </div>
    </div>
  );
};

export default DynamicTitle;
