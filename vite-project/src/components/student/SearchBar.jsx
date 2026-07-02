import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({data}) => {
  const navigate = useNavigate()  //we can help the user to navigate to other pages through this function
  const [input , setInput] = useState(data ? data : '') // jab bhi hum input field kuch denge to vo input state me store ho jayega
  const onSearchHandler = (e)=>{
    e.preventDefault()
    navigate('/course-list/' + input )
  }
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-8">
      <form onSubmit={onSearchHandler} className="w-full max-w-4xl bg-white border border-gray-300 rounded-full shadow-md flex items-center overflow-hidden">

        
        <img
          src={assets.search_icon}
          alt="search"
          className="w-4 h-4 sm:w-5 sm:h-5 ml-4 sm:ml-6"
        />

        
        <input onChange={e=>setInput(e.target.value)}value={input}
          type="text"
          placeholder="Search for courses"
          className="flex-1 h-12 sm:h-14 px-3 sm:px-5 text-sm sm:text-base outline-none"
        />

        
        <button
          type="submit"
          className="h-12 sm:h-14 px-5 sm:px-8 lg:px-10 bg-blue-900 text-white text-sm sm:text-base font-medium hover:bg-blue-800 transition-all duration-300"
        >
          Search
        </button>

      </form>
    </div>
  );
};

export default SearchBar;