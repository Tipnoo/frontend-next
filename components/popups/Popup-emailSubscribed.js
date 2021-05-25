/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PopupEmailSubscribed = (props) => {
  const closePopup = () => {
    props.toggle();
  };

  return (
    <div className="fixed z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center bg-indigo-500 rounded-md w-11/12 md:w-8/12 xl:w-5/12 mx-auto flex-row shadow-2xl">
      <div className="absolute top-0 right-6">
        <span
          className="text-white text-4xl font-extrabold cursor-pointer"
          onClick={closePopup}
          role="button"
          tabIndex={0}
        >
          &times;
        </span>
      </div>
      <img
        className="h-16 md:h-24 mx-auto pt-4"
        src="/images/email-love.png"
        alt="email"
      />
      <h3 className="font-bold text-lg xl:text-xl mt-4 w-4/5 mx-auto text-white">
        Thank you! We've sent you an email to confirm your subscription!
      </h3>
      <p className="w-4/5 mt-4 mb-2 mx-auto text-white">
        After you confirm, we'll start sending you your email alerts.
      </p>
      <div>
        <button
          onClick={closePopup}
          className="bg-green-500 hover:bg-green-700 text-white border-b-4 border-r-2 border-green-600 font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 lg:mb-8 mx-auto cursor-pointer"
          role="button"
          tabIndex={0}
        >
          Ok, got it!
        </button>
      </div>
    </div>
  );
};

export default PopupEmailSubscribed;
