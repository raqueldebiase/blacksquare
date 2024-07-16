import React from 'react';

const Search = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20 mt-20 px-4 h-96 ">
      <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      <h2 className="text-3xl mb-6 text-white relative z-10">Looking for something?</h2>
      <div className="flex w-full max-w-md relative z-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-3 px-4 border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
        />
        <button className="py-3 px-6 ml-2 bg-black bg-opacity-70 text-white hover:bg-opacity-90 transition duration-300 ease-in-out">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
