import React from "react";
import {
  FaLaptopCode,
  FaClock,
  FaUserFriends,
  FaBookOpen,
} from "react-icons/fa";
const features = [
  {
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    title: "Interactive Tools",
    desc: "Use modern tools to collaborate, write notes, and share ideas in real-time.",
  },
  {
    icon: <FaClock className="text-4xl text-primary" />,
    title: "Flexible Scheduling",
    desc: "Study anytime, anywhere with flexible and personalized session planning.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-primary" />,
    title: "Peer Collaboration",
    desc: "Learn and grow together with other students in group sessions.",
  },
  {
    icon: <FaBookOpen className="text-4xl text-primary" />,
    title: "Organized Resources",
    desc: "Access shared study materials, notes, and assignments all in one place.",
  },
];

const WhyChoiceUs = () => {
  return (
    <div>
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-500 mb-12">
            Empowering students with smart tools for better learning.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="card shadow-md bg-[#ffffff] hover:shadow-lg transition"
              >
                <div className="card-body items-center text-center">
                  {feature.icon}
                  <h3 className="card-title text-xl mt-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoiceUs;
