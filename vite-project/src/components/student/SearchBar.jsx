import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({data}) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')
  const onSearchHandler = (e) => {
    e.preventDefault()
    navigate('/course-list/' + input)
  }
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 w-full">
      <form onSubmit={onSearchHandler} className="w-full max-w-2xl bg-white/95 border border-white/20 rounded-full shadow-2xl shadow-brand-900/40 flex items-center overflow-hidden">

        <img
          src={assets.search_icon}
          alt="search"
          className="w-4 h-4 sm:w-5 sm:h-5 ml-4 sm:ml-6 opacity-60"
        />

        <input onChange={e => setInput(e.target.value)} value={input}
          type="text"
          placeholder="What do you want to learn today?"
          className="flex-1 h-12 sm:h-14 px-3 sm:px-5 text-sm sm:text-base outline-none text-ink-900 placeholder:text-ink-500"
        />

        <button
          type="submit"
          className="h-12 sm:h-14 px-5 sm:px-8 lg:px-10 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-all duration-300"
        >
          Search
        </button>

      </form>
    </div>
  );
};

export default SearchBar;
