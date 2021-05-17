import React from 'react';

const PopupDeleteOffer = (props) => {
  const closePopup = () => {
    props.toggle();
  };

  const deleteOffer = () => {
    props.deleteOffer();
  };

  return (
    <div className="fixed z-50 w-full h-64 top-0">
      <div className="bg-indigo-600 rounded-md absolute w-11/12 h-full ml-2 mt-48 flex-row">
        <h3 className="font-bold text-lg mt-8 w-4/5 mx-auto text-white">
          Are you sure you want to delete your Offer?
        </h3>
        <div>
          <button
            onClick={deleteOffer}
            className="bg-red-600 hover:bg-red-700 border-b-4 border-r-2 border-red-700 text-white font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 mx-auto cursor-pointer"
          >
            Yes, delete it
          </button>
          <button
            onClick={closePopup}
            className="bg-green-600 hover:bg-green-700 border-b-4 border-r-2 border-green-700 text-white font-bold py-2 px-4 rounded w-2/5 mt-4 mb-4 ml-4 cursor-pointer"
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
