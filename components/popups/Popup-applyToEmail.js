/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PopupApplyToEmail = (props) => {
  const closePopup = () => {
    props.toggle();
  };

  return (
    <div className="fixed z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-indigo-500 rounded-md w-11/12 md:w-8/12 xl:w-6/12 mx-auto flex-row shadow-2xl">
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
        className="h-20 md:h-28 mx-auto pt-6"
        src="/images/apply-to-email.png"
        alt="email"
      />
      <h3 className="font-bold mt-4 text-lg w-4/5 mx-auto text-white">
        You can apply to this offer sending an email to:
      </h3>
      <p className="w-4/5 mt-4 mb-2 mx-auto text-white md:text-lg">{props.applyEmail}</p>
      <div>
        <button
          onClick={closePopup}
          className="bg-yellow-600 hover:bg-yellow-700 text-white border-b-4 border-r-2 border-yellow-700 hover:border-yellow-800 font-bold md:text-lg py-2 px-4 rounded w-2/5 mt-4 mb-4 lg:mb-12 mx-auto cursor-pointer"
          type="button"
        >
          Ok, got it!
        </button>
      </div>
    </div>
  );
};

export default PopupApplyToEmail;
