import React from "react";
import {
  FaLaptopCode,
  FaClock,
  FaUserFriends,
  FaBookOpen,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode className="text-4xl " />,
    title: "Interactive Tools",
    desc: "Use modern tools to collaborate, write notes, and share ideas in real-time.",
  },
  {
    icon: <FaClock className="text-4xl " />,
    title: "Flexible Scheduling",
    desc: "Study anytime, anywhere with flexible and personalized session planning.",
  },
  {
    icon: <FaUserFriends className="text-4xl " />,
    title: "Peer Collaboration",
    desc: "Learn and grow together with other students in group sessions.",
  },
  {
    icon: <FaBookOpen className="text-4xl " />,
    title: "Organized Resources",
    desc: "Access shared study materials, notes, and assignments all in one place.",
  },
];

const WhyChoiceUs = () => {
  return (
    <section className="py-20 bg-base-100">
     
      {/* st */}
      <div>
        <div className="mt-8 mb-2 flex items-center gap-3 flex-col">
          <div className="mt-4 text-4xl font-bold mb-2 ">
          Why Choose Us
          </div>
          <p className="text-lg font-medium text-justify mb-4">
          Empowering students with smart tools and seamless collaboration for a
          brighter learning experience.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 ">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card bg-base-200  hover:shadow-xl hover:bg-[#0A043C] hover:text-white transition duration-300 ease-in-out"
            >
              <div className="card-body items-center text-center space-y-4">
                {feature.icon}
                <h3 className="card-title text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="">{feature.desc}</p>
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
