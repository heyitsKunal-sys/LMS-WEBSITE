import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <section className="relative w-full pt-8 pb-20 sm:pt-10 sm:pb-24 px-5">
      <div className="max-w-7xl mx-auto sm:px-8 lg:px-12">

        {/* Heading */}
        <span className="block text-center text-brand-300 text-xs sm:text-sm font-semibold tracking-widest uppercase">Learner stories</span>
        <h2 className="text-center font-display font-bold text-white text-[clamp(2rem,4vw,2.8rem)] mt-3">
          Loved by learners everywhere
        </h2>

        <p className="mt-4 text-center text-ink-300 max-w-3xl mx-auto text-sm sm:text-base leading-7">
          Real people, real career moves. Here's what a few of our students
          have to say about learning with Nexalearn.
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {dummyTestimonial.map((testimonial, index) => (

            <div
              key={index}
              className="card-surface rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >

              {/* User */}
              <div className="flex items-center gap-4 p-6">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-300"
                />

                <div>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-ink-500">
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

                <p className="mt-5 text-ink-500 text-sm leading-7">
                  {testimonial.feedback}
                </p>

                <button className="mt-6 text-brand-600 font-medium hover:underline cursor-pointer">
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
