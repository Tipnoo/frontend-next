import React from 'react';

const PopupApplyToEmail = (props) => {
  const closePopup = () => {
    props.toggle();
  };

  return (
    <div className="fixed z-50 w-screen h-72 top-0 text-center left-0">
      <div className="bg-indigo-500 rounded-md w-11/12 h-full mx-auto mt-48 flex-row">
        <img
          className="h-20 mx-auto pt-6"
          src="/images/apply-to-email.png"
          alt="email"
        ></img>
        <h3 className="font-bold mt-4 text-lg w-4/5 mx-auto text-white">
          You can apply to this offer sending an email to:
        </h3>
        <p className="w-4/5 mt-4 mb-2 mx-auto text-white">{props.applyEmail}</p>
        <div>
          <button
            onClick={closePopup}
            className="bg-yellow-600 hover:bg-yellow-700 text-white border-b-4 border-r-2 border-yellow-700 font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 mx-auto cursor-pointer"
          >
            Ok, got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupApplyToEmail;
