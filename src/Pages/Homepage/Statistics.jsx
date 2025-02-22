import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const statsData = [
  { id: 1, number: 550, text: "Students Enrolled", icon: "🎓" },
  { id: 2, number: 100, text: "Satisfaction Rate", icon: "📜" },
  { id: 3, number: 300, text: "Academic Programs", icon: "📖" },
  { id: 4, number: 40, text: "Online Instructor", icon: "📺" },
];

const Statistics = () => {
  return (
    <div className="bg-[#0a043c] text-white py-16 mb-24">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      {statsData.map((item) => (
        <motion.div
          key={item.id}
          className="p-6 rounded-lg bg-opacity-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: item.id * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-2">{item.icon}</div>
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: item.id * 0.2 }}
          >
            <CountUp start={0} end={item.number} duration={2.5} />+
          </motion.h2>
          <p className="text-gray-300">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default Statistics;
