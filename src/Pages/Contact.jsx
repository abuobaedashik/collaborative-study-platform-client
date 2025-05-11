import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <section className="bg-white py-16 px-6 md:px-20" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-10">
          Got a question, feedback, or want to collaborate with us? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">support@studycollab.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Address</h4>
              <p className="text-gray-600">123 Study Lane, Knowledge City, EduLand</p>
            </div>
          </div>
        </div>

        <form className="mt-12 space-y-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

        </div>
    );
};

export default Contact;