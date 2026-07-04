import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <section className="w-full pt-8 pb-16 sm:pt-10 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-800 text-[clamp(2rem,4vw,2.8rem)]">
          Testimonials
        </h2>

        <p className="mt-4 text-center text-gray-500 max-w-3xl mx-auto text-sm sm:text-base leading-7">
          Journey of transformation and success of our learners as they share
          how our platform has made a difference in their lives.
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {dummyTestimonial.map((testimonial, index) => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >

              {/* User */}
              <div className="flex items-center gap-4 p-6">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>

              {/* Content */}
              <div className="px-6 pb-6">

                <div className="flex gap-1">

                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={
                        i < Math.floor(testimonial.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      alt="star"
                      className="w-5"
                    />
                  ))}

                </div>

                <p className="mt-5 text-gray-600 text-sm leading-7">
                  {testimonial.feedback}
                </p>

                <button className="mt-6 text-blue-700 font-medium hover:underline cursor-pointer">
                  Read More
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;