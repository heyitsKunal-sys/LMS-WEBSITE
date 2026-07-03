import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const searchRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(
        paragraphRef.current,
        {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        searchRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="w-full bg-linear-to-b from-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 md:pt-28 lg:pt-32 pb-16 text-center">

        {/* Heading */}
        <h1
          ref={headingRef}
          className="relative mx-auto max-w-5xl font-extrabold leading-tight"
        >
          <span
            className="
              block
              text-gray-900
              text-[2.2rem]
              sm:text-[3rem]
              md:text-[3.8rem]
              lg:text-[4.2rem]
              leading-tight
            "
          >
            Build your future with
          </span>

          <span
            className="
              relative
              mt-2
              block
              text-blue-900
              text-[1.6rem]
              sm:text-[2.2rem]
              md:text-[2.8rem]
              lg:text-[3rem]
              leading-tight
            "
          >
            expert instructors and best courses

            <img
              src={assets.sketch}
              alt=""
              className="hidden lg:block absolute -bottom-5 right-8 w-36"
            />
          </span>
        </h1>

        {/* Paragraph */}
        <p
          ref={paragraphRef}
          className="
            mt-7
            mx-auto
            max-w-xl
            md:max-w-2xl
            text-gray-500
            text-sm
            sm:text-base
            leading-7
          "
        >
          We have the best courses, excellent instructors, interactive learning
          experiences, and a supportive community to help you achieve your
          goals. Start learning today and build the career you've always
          dreamed of.
        </p>

        {/* Search Bar */}
        <div
          ref={searchRef}
          className="mt-10 flex justify-center"
        >
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;