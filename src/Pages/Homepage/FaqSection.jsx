import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "How do I join a study session?",
    answer:
      "First, register or log in to your account. Then choose a session from the dashboard and complete the payment.",
  },
  {
    question: "Can I access materials after the session?",
    answer:
      "Yes, all enrolled students can revisit and download study materials anytime from the dashboard.",
  },
  {
    question: "How do tutors manage their sessions?",
    answer:
      "Tutors can access their own dashboard to schedule, update, and manage their assigned sessions.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support all major credit/debit cards and mobile payment systems like bKash, Nagad, and Rocket.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="py-16 bg-white max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-10">
          <FaQuestionCircle className="text-4xl text-[#1a2330]" />
          <h2 className="text-3xl font-bold text-[#1a2330] font-nunito">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-[#1a2330] font-nunito text-xl font-semibold"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-[#486b9b] font-nunito text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
