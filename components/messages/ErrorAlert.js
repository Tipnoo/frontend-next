import React from 'react';

import PropTypes from 'prop-types';

import ButtonReturnToHome from '../buttons/Btn-returnToHome';

const ErrorAlert = (props) => {
  return (
    <div>
      <div className="bg-gray-100 text-center rounded-b text-teal-darkest px-2 py-3 shadow-md h-screen">
        <img
          className="h-32 mx-auto pt-4"
          src="/images/404-not-found.png"
          alt="email"
        ></img>
        <div className="w-5/6 mx-auto mt-6">
          <p className="text-xl font-bold">Our robots found a {props.error}</p>
          <div className="bg-white border-gray-400 border rounded mt-6">
            <p className="p-4 font-semibold text-gray-600 ">
              If you encountered this problem, please write us an email to{' '}
              <b>hello@tipnoo.com</b> and we'll solve it as soon as possible!
            </p>
          </div>
          <ButtonReturnToHome />
        </div>
      </div>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

export default ErrorAlert;
