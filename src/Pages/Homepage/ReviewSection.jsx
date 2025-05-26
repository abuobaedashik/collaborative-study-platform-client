import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Sarah Ahmed",
      role: "CSE Student",
      review:
        "This platform helped me connect with amazing study partners. Highly recommend!",
      rating: 5,
    },
    {
      name: "Tanvir Hasan",
      role: "Web Developer Learner",
      review:
        "I loved how easy it was to find collaborators. Very user-friendly!",
      rating: 4,
    },
    {
      name: "Riya Khan",
      role: "Frontend Enthusiast",
      review:
        "Clean interface and supportive community. Perfect for group projects.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className=" py-16 px-6 md:px-20" id="reviews">
      <div className="w-full items-center justify-center mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Students Say
        </h2>
        <p className="text-gray-600 mb-10">
          Real feedback from learners and collaborators.
        </p>

        <Slider {...settings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="px-3">
              {" "}
              {/* Add horizontal padding here */}
              <div className="bg-white rounded-2xl shadow-md p-6 text-left h-full">
                <div className="flex items-center mb-4 justify-start font-bold">
                  <div className="text-2xl font-semibold text-[#1a2330]">
                    {review.name}
                  </div>
                  <span className="ml-2 text-sm text-[#486b9b] font-nunito">
                    ({review.role})
                  </span>
                </div>
                <p className="text-gray-700 mb-4">"{review.review}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSection;
