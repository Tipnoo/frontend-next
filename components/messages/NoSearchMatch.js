import React from 'react';

const NoSearchMatch = () => {
  return (
    <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
      <img
        className="h-32 mx-auto pt-4"
        src="/images/query-not-found.png"
        alt="email"
      ></img>
      <div className="w-5/6 mx-auto mt-6">
        <p className="text-xl font-bold">
          Our robots didn't find any matching results
        </p>
        <p className="p-2 font-semibold ">You can try with another search!</p>
      </div>
    </div>
  );
};

export default NoSearchMatch;
