import React from 'react';

const Loading = () => {
  return (
    <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
      <img
        className="h-32 mx-auto pt-4"
        src="/images/loading-robot.png"
        alt="email"
      />
      <div className="w-5/6 mx-auto mt-6">
        <p className="text-4xl font-bold">Loading...</p>
        <p className="p-2 font-semibold text-gray-500">
          If you are experiencing any issues, contact us at{' '}
          <b>hello@tipnoo.com</b>
        </p>
      </div>
    </div>
  );
};

export default Loading;
