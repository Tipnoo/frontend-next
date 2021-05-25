/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PopupDeleteOffer = (props) => {
  const closePopup = () => {
    props.toggle();
  };

  const deleteOffer = () => {
    props.deleteOffer();
  };

  return (
    <div className="fixed z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-yellow-200 rounded-md w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 xl:ml-2 md:px-24 shadow-2xl mx-auto">
      <div className="absolute top-0 right-6">
        <span
          className="text-black text-4xl font-extrabold cursor-pointer"
          onClick={closePopup}
          role="button"
          tabIndex={0}
        >
          &times;
        </span>
      </div>
      <h3 className="font-bold text-lg xl:text-xl pt-8 w-4/5 mx-auto text-black">
        Are you sure you want to delete your Offer?
      </h3>
      <div>
        <button
          onClick={deleteOffer}
          className="bg-red-600 hover:bg-red-700 border-b-4 border-r-2 border-red-700 text-white font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 mx-auto cursor-pointer xl:text-lg"
          type="button"
        >
          Yes, delete it
        </button>
        <button
          onClick={closePopup}
          className="bg-blue-600 hover:bg-blue-700 border-b-4 border-r-2 border-blue-700 text-white font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 ml-4 cursor-pointer xl:text-lg"
          type="button"
        >
          No, go back
        </button>
      </div>
      <p className="text-sm xl:text-base mt-2 mb-8 px-8 text-gray-800">
        This will permanently delete your offer from Tipnoo. You cannot
        retrieve back your offer once deleted.
      </p>
    </div>
  );
};

export default PopupDeleteOffer;
