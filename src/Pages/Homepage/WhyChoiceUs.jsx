import React from "react";
import {
  FaLaptopCode,
  FaClock,
  FaUserFriends,
  FaBookOpen,
} from "react-icons/fa";
import DynamicTitle from "../../Shared Components/DynamicTitle";

const features = [
  {
    icon: <FaLaptopCode className="text-2xl " />,
    title: "Interactive Tools",
    desc: "Use modern tools to collaborate, write notes, and share ideas in real-time.",
  },
  {
    icon: <FaClock className="text-2xl " />,
    title: "Flexible Scheduling",
    desc: "Study anytime, anywhere with flexible and personalized session planning.",
  },
  {
    icon: <FaUserFriends className="text-2xl " />,
    title: "Peer Collaboration",
    desc: "Learn and grow together with other students in group sessions.",
  },
  {
    icon: <FaBookOpen className="text-2xl " />,
    title: "Organized Resources",
    desc: "Access shared study materials, notes, and assignments all in one place.",
  },
];

const WhyChoiceUs = () => {
  return (
    <section className="pb-20">
     
      {/* st */}
      <div>
        <div className="mt-8 mb-2 flex items-center gap-3 flex-col">
           <DynamicTitle heading="Benefits of joining US" title="Smart Learning, Together" subtitle="Find better study materials to improve your skill" />
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 px-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className=" duration-300 ease-in-out"
            >
              <div className="flex items-start flex-col justify-start gap-5">
                 <div className="rounded-full w-16 h-16 shadow-2xl  flex items-center justify-center text-[#ffffff] bg-[#fe753f] p-2"> {feature.icon}</div>
                <h3 className="card-title text-2xl text-[#1a2330] font-roboto font-semibold">
                  {feature.title}
                </h3>
                <p className="text-[#486b9b] font-nunito text-base">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* end */}
    </section>
  );
};

export default WhyChoiceUs;
