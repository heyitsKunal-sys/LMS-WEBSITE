import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const {allCourses} = useContext(AppContext)
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">

        <h2 className="font-bold text-gray-900 text-[clamp(2rem,4vw,2.8rem)]">
          Learn from the best
        </h2>

        <p className="mt-4 mx-auto max-w-3xl text-gray-500 text-sm sm:text-base leading-7">
          Discover our best rated courses across various categories. From
          programming and design to business and management, our courses are
          designed to deliver the best learning experience and help you achieve
          your goals.
        </p>

        {/* Course Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
          {allCourses.slice(0,4).map((course,index)=><CourseCard key={index} course={course} />)}
          {/* yahan courseCard component k andr humne course ko as prop bhja or course k details le liye */}
        </div>

        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="
            inline-flex
            items-center
            justify-center
            mt-4
            px-8
            py-3
            rounded-full
            border
            border-gray-300
            text-gray-700
            font-medium
            transition-all
            duration-300
            hover:bg-blue-900
            hover:text-white
            hover:border-blue-900
            hover:shadow-lg
          "
        >
          Show all Courses
        </Link>

      </div>
    </section>
  );
};

export default CoursesSection;