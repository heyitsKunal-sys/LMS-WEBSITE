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
    <section className="relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 md:pt-32 lg:pt-40 pb-16 text-center">

        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-brand-300 text-xs sm:text-sm font-medium mb-6 bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
          Trusted by 40,000+ learners worldwide
        </span>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="relative mx-auto max-w-5xl font-extrabold leading-tight font-display"
        >
          <span
            className="
              block
              text-white
              text-[2.2rem]
              sm:text-[3rem]
              md:text-[3.8rem]
              lg:text-[4.2rem]
              leading-tight
            "
          >
            Skills that move you
          </span>

          <span
            className="
              relative
              mt-2
              block
              text-gradient
              text-[1.8rem]
              sm:text-[2.4rem]
              md:text-[3rem]
              lg:text-[3.2rem]
              leading-tight
            "
          >
            forward, taught by people who ship

            <img
              src={assets.sketch}
              alt=""
              className="hidden lg:block absolute -bottom-5 right-8 w-36 opacity-80"
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
            text-ink-300
            text-sm
            sm:text-base
            leading-7
          "
        >
          Nexalearn pairs project-based courses with instructors who work in the
          field right now. Learn by building, get feedback that matters, and
          walk away with a portfolio — not just a certificate.
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
