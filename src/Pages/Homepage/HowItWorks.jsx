import DynamicTitle from "../../Shared Components/DynamicTitle";
import React from "react";
import {
  FaUserPlus,
  FaChalkboardTeacher,
  FaCreditCard,
  FaBook,
  FaTachometerAlt,
  FaRegCalendarCheck,
  FaFolderOpen,
  FaUserShield,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-3xl text-[#1a2330]" />,
    title: "Register / Login",
    description: "Create an account or log in to your profile.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-[#1a2330]" />,
    title: "Select Session",
    description: "Choose a study session suitable for you.",
  },
  {
    icon: <FaCreditCard className="text-3xl text-[#1a2330]" />,
    title: "Make Payment",
    description: "Securely pay the session fee with right payment methods.",
  },
  {
    icon: <FaBook className="text-3xl text-[#1a2330]" />,
    title: "Get Study Materials",
    description: "Access essential learning materials instantly.",
  },
  {
    icon: <FaTachometerAlt className="text-3xl text-[#1a2330]" />,
    title: "Dashboard Access",
    description: "Login to your personalized dashboard anytime.",
  },
  {
    icon: <FaRegCalendarCheck className="text-3xl text-[#1a2330]" />,
    title: "View Booked Sessions",
    description: "See your upcoming sessions inside the dashboard.",
  },
  {
    icon: <FaFolderOpen className="text-3xl text-[#1a2330]" />,
    title: "View Materials Anytime",
    description: "Revisit and download materials from dashboard.",
  },
  {
    icon: <FaUserShield className="text-3xl text-[#1a2330]" />,
    title: "Role-Based Dashboard",
    description: "Tutors manage sessions, Admin manages platform.",
  },
];

const HowItWorks = () => {
  return (
    <div>
      <div className="mt-8 mb-2 flex items-center gap-3 flex-col">
        <DynamicTitle
          heading="How It Works"
          title="Collaborate and Learn – Here's How"
          subtitle="Join a group, collaborate in real-time, and grow together"
        />
        <section className="py-1 text-center" id="work-process">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#fe753f] p-6 rounded-2xl shadow-md flex items-center justify-center flex-col hover:shadow-xl transition duration-300"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl text-[#1a2330] font-bold mb-2">{step.title}</h3>
                <p className="text-[#486b9b] font-nunito text-base ">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
