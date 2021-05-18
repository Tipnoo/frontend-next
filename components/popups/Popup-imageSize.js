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
    <div className="fixed z-50 w-screen h-72 top-0 text-center left-0">
      <div className="bg-green-600 rounded-md w-11/12 md:w-8/12 h-full mx-auto mt-48 flex-row relative shadow-2xl">
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
        <h3 className="font-bold text-lg pt-8 md:pt-12 w-4/5 mx-auto text-white">
          The image that you're trying to upload weights
          {' '}
          {convertBytesToMb()}
          {' '}
          Mb. Please upload an image of less than 1 Mb. Thank you!
        </h3>

        <p className="w-4/5 mt-4 mb-2 mx-auto  text-white">
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
            className="bg-yellow-500 hover:bg-yellow-700 text-white border-b-4 border-r-2 border-yellow-700 font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 mx-auto cursor-pointer"
          >
            Ok, got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupImageSize;
