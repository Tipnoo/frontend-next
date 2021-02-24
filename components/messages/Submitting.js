import React from 'react';

const Submitting = () => (
  <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
    <img
      className="h-32 mx-auto pt-4"
      src="/images/publishing-robot.png"
      alt="email"
    />
    <div className="w-5/6 mx-auto mt-6">
      <p className="text-2xl font-bold">
        Our robots are redirecting you to the payment page...
      </p>
      <p className="mt-4 p-2 font-semibold text-gray-500">
        This should not take more than a few seconds, but if you are
        experiencing any issues contact us at
        {' '}
        <b>hello@tipnoo.com</b>
      </p>
    </div>
  </div>
);

export default Submitting;
