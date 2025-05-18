import React from "react";

const SectionTitle = ({subHeading,title,heading}) => {
  return (
    <div>
      <div className="text-center my-10 ">
        <p className="text-sm text-[#FE753F] uppercase tracking-wide mb-2">
         <span className="text-[#FE753F]">--- </span>
        {subHeading}
        <span className="text-[#FE753F]"> ---</span> 
        </p>
        <h1 className="text-4xl font-bold text-[#05051E] font-roboto">{title}</h1>
        <h2 className="text-xl font-bold text-gray-800">{heading}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
