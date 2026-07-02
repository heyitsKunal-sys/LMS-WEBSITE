import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import SearchBar from "./SearchBar";

const Hero = () => {
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useGSAP(() => {
    const split = new SplitType(titleRef.current, {
      types: "chars",
    });

    gsap.set(split.chars, {
      opacity: 0,
      y: 100,
      rotateX: -90,
      filter: "blur(10px)",
    });

    const tl = gsap.timeline();

    tl.to(split.chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      stagger: 0.025,
      duration: 0.7,
      ease: "back.out(2)",
    }).from(
      paraRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

    return () => split.revert();
  }, []);

  return (
    <section className="w-full overflow-hidden bg-linear-to-b from-white to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 md:pt-36 text-center">

        <h1
          ref={titleRef}
          className="relative mx-auto max-w-5xl font-bold leading-tight text-gray-800"
        >
          <span className="block text-[clamp(2.2rem,6vw,4.5rem)]">
            Build your future with
          </span>

          <span className="relative mt-2 block text-blue-900 text-[clamp(1.8rem,5vw,3rem)]">
            expert instructors and best courses

            <img
              src={assets.sketch}
              alt="sketch"
              className="hidden md:block absolute -bottom-6 right-0 w-40"
            />
          </span>
        </h1>

        <p
          ref={paraRef}
          className="mt-8 mx-auto max-w-2xl text-gray-500 text-base sm:text-lg leading-8"
        >
          We have the best courses, excellent  instructors,
          interactive learning experiences, and a supportive community to help
          you achieve your goals

        </p>
        <SearchBar />

      </div>
    </section>
  );
};

export default Hero;