import React from 'react';

const PopupEmailSubscribed = (props) => {
  const closePopup = () => {
    props.toggle();
  };

  return (
    <div className="fixed z-50 w-screen h-80 top-0 text-center mx-auto my-auto">
      <div className="bg-indigo-500 rounded-md w-11/12 h-full mx-auto mt-48 flex-row">
        <img
          className="h-16 mx-auto pt-4"
          src="/images/email-love.png"
          alt="email"
        ></img>
        <h3 className="font-bold text-lg mt-4 w-4/5 mx-auto text-white">
          Thank you! We've sent you an email to confirm your subscription!
        </h3>
        <p className="w-4/5 mt-4 mb-2 mx-auto text-white">
          After you confirm, we will start sending you your email alerts.
        </p>
        <div>
          <button
            onClick={closePopup}
            className="bg-green-500 hover:bg-green-700 text-white border-b-4 border-r-2 border-green-600 font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 mx-auto cursor-pointer"
          >
            Ok, got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupEmailSubscribed;
