import { title } from "framer-motion/client";
import React from "react";

const DynamicTitle = ({subtitle,title,image,total,total2,total3,total4}) => {
  return (
    <div>
      <div className="my-8 mx-auto px-20 py-4 flex flex-col items-center rounded-xl  justify-center bg-[#ffffff] w-full  gap-2 ">
        <div className="text-3xl flex items-center flex-col rounded-2xl  ">
          <img src={image} alt="note" className="h-[64px] w-[64px]" />
          <p className="text-4xl font-bold text-[#0A033C] mb-2">
            {" "}
           {title}
          </p>
          <p className="text-base">{total}</p>
          <p className="text-base">{total2}</p>
          <p className="text-base">{total3}</p>
          <p className="text-base">{total4}</p>
        </div>
        <div className="text-base pl-3 mb-5 font-semibold text-[#131313] ">
           {subtitle}
        </div>
      </div>
    </div>
  );
};

export default DynamicTitle;
