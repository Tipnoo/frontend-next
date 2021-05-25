/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PopupImageSize = (props) => {
  const closePopup = () => {
    props.toggle();
  };

  const convertBytesToMb = () => {
    const imgBytes = props.imgActualSize;
    const imgMegabytes = (imgBytes / 1048576).toFixed(2);
    return imgMegabytes;
  };

  return (
    <div className="fixed z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-green-600 rounded-md w-11/12 md:w-8/12 lg:w-7/12 xl:w-5/12 mx-auto flex-row shadow-2xl">
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
      <h3 className="font-bold text-lg md:text-xl pt-8 md:pt-12 w-4/5 mx-auto mt-2 text-white">
        The image that you're trying to upload weights
        {' '}
        {convertBytesToMb()}
        {' '}
        Mb. Please upload an image of less than 1 Mb. Thank you!
      </h3>

      <p className="w-4/5 mt-4 mb-2 mx-auto md:text-lg text-white">
        You can use
        <a
          className="text-blue-700"
          href="https://tinypng.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Tinypng
        </a>
        {' '}
        to resize your image
      </p>
      <div>
        <button
          type="button"
          onClick={closePopup}
          className="bg-yellow-500 hover:bg-yellow-600 text-white border-b-4 border-r-2 border-yellow-600 hover:border-yellow-800 font-bold py-2 px-4 rounded w-2/5 mt-4 mb-8 lg:mb-10 mx-auto cursor-pointer"
        >
          Ok, got it!
        </button>
      </div>
    </div>
  );
};

export default PopupImageSize;
