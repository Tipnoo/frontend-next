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
    <div className="fixed z-50 w-screen h-64 top-0 text-center -ml-2 my-auto">
      <div className="bg-indigo-500 rounded-md w-11/12 md:w-9/12 md:px-24 shadow-2xl h-full mx-auto mt-48 relative">
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
        <h3 className="font-bold text-lg pt-8 w-4/5 mx-auto text-white">
          Are you sure you want to delete your Offer?
        </h3>
        <div>
          <button
            onClick={deleteOffer}
            className="bg-red-600 hover:bg-red-700 border-b-4 border-r-2 border-red-700 text-white font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 mx-auto cursor-pointer"
            type="button"
          >
            Yes, delete it
          </button>
          <button
            onClick={closePopup}
            className="bg-green-600 hover:bg-green-700 border-b-4 border-r-2 border-green-700 text-white font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 ml-4 cursor-pointer"
            type="button"
          >
            No, go back
          </button>
        </div>
        <p className="text-sm mt-2 mb-8 px-8 text-white">
          This will permanently delete your offer from Tipnoo. You cannot
          retrieve back your offer once deleted.
        </p>
      </div>
    </div>
  );
};

export default PopupDeleteOffer;
