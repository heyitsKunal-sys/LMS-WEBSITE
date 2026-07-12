import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext)
  return (
    <section className="relative w-full py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">

        <span className="text-brand-300 text-xs sm:text-sm font-semibold tracking-widest uppercase">Handpicked for you</span>

        <h2 className="font-display font-bold text-white text-[clamp(2rem,4vw,2.8rem)] mt-3">
          Learn from the best
        </h2>

        <p className="mt-4 mx-auto max-w-3xl text-ink-300 text-sm sm:text-base leading-7">
          Explore top-rated courses across programming, data, design and cloud —
          each one built around real projects and taught by working
          practitioners who love to teach.
        </p>

        {/* Course Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
          {allCourses.slice(0, 4).map((course, index) => <CourseCard key={index} course={course} />)}
        </div>

        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="btn-secondary mt-10"
        >
          Show all Courses
        </Link>

      </div>
    </section>
  );
};

export default CoursesSection;
